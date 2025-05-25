
import React, { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types/product";

interface ProductRecommendationsProps {
  currentProductId?: string;
  userPreferences?: {
    preferredIntensity?: string[];
    preferredScents?: string[];
    priceRange?: [number, number];
  };
  maxRecommendations?: number;
}

const ProductRecommendations = ({ 
  currentProductId, 
  userPreferences,
  maxRecommendations = 4 
}: ProductRecommendationsProps) => {
  const { language, isRTL } = useLanguage();

  const getRecommendations = useMemo(() => {
    let filteredProducts = products.filter(p => p.id !== currentProductId);

    if (userPreferences) {
      // Filter by intensity preference
      if (userPreferences.preferredIntensity?.length) {
        filteredProducts = filteredProducts.filter(p => 
          p.intensity && userPreferences.preferredIntensity?.includes(p.intensity)
        );
      }

      // Filter by scent profile
      if (userPreferences.preferredScents?.length) {
        filteredProducts = filteredProducts.filter(p =>
          p.scentProfile[language].some(scent =>
            userPreferences.preferredScents?.some(pref =>
              scent.toLowerCase().includes(pref.toLowerCase())
            )
          )
        );
      }

      // Filter by price range
      if (userPreferences.priceRange) {
        const [min, max] = userPreferences.priceRange;
        filteredProducts = filteredProducts.filter(p =>
          p.price.amount >= min && p.price.amount <= max
        );
      }
    }

    // Sort by relevance (premium products first, then by category)
    return filteredProducts
      .sort((a, b) => {
        const categoryPriority = { 'super-premium': 4, 'royal-oud': 3, 'premium-oud': 2, 'signature-oud': 1 };
        return (categoryPriority[b.category as keyof typeof categoryPriority] || 0) - 
               (categoryPriority[a.category as keyof typeof categoryPriority] || 0);
      })
      .slice(0, maxRecommendations);
  }, [currentProductId, userPreferences, language, maxRecommendations]);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hello! I'm interested in the recommended product: ${product.name[language]} (${product.price.amount} ${product.price.currency}). Please provide more details.`;
    const whatsappUrl = `https://wa.me/971557993441?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (getRecommendations.length === 0) return null;

  return (
    <section className="py-12 bg-faran-lightSandstone">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-faran-gold" size={24} />
            <h3 className="text-2xl font-serif text-faran-brown">
              {isRTL ? "موصى لك خصيصاً" : "Recommended for You"}
            </h3>
          </div>
          <p className="text-faran-brown/70">
            {isRTL 
              ? "عطور مختارة بعناية تناسب ذوقك المميز"
              : "Carefully curated fragrances that match your refined taste"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getRecommendations.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <Link to={`/${language}/product/${product.id}`}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={16} className="text-faran-brown hover:text-faran-gold" />
                </button>
              </div>

              <div className="p-4">
                <Link to={`/${language}/product/${product.id}`}>
                  <h4 className="font-serif text-lg text-faran-brown mb-2 hover:text-faran-gold transition-colors line-clamp-1">
                    {product.name[language]}
                  </h4>
                </Link>
                
                <div className="flex items-center gap-2 mb-3">
                  {product.scentProfile[language].slice(0, 2).map((note, noteIndex) => (
                    <span key={noteIndex} className="px-2 py-1 bg-faran-beige text-faran-brown text-xs rounded">
                      {note}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-faran-gold">
                    {product.price.amount} {product.price.currency}
                  </span>
                  {product.intensity && (
                    <span className="text-xs text-faran-brown/60 bg-faran-smoke px-2 py-1 rounded">
                      {product.intensity}
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full btn-luxury-outline flex items-center justify-center gap-2 text-sm py-2"
                >
                  <ShoppingBag size={14} />
                  <span>{isRTL ? "اطلب الآن" : "Order Now"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;
