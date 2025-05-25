
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Trash2, ShoppingBag, Share2 } from "lucide-react";
import { getProductById } from "@/data/products";
import { Product } from "@/types/product";

const Wishlist = () => {
  const { language, isRTL } = useLanguage();
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    try {
      const stored = localStorage.getItem('faran-wishlist');
      if (stored) {
        const productIds = JSON.parse(stored) as string[];
        const products = productIds
          .map(id => getProductById(id))
          .filter((product): product is Product => product !== undefined);
        setWishlistProducts(products);
      }
    } catch (error) {
      console.error('Error loading wishlist:', error);
    }
  };

  const addToWishlist = (productId: string) => {
    try {
      const stored = localStorage.getItem('faran-wishlist');
      const wishlistIds = stored ? JSON.parse(stored) : [];
      
      if (!wishlistIds.includes(productId)) {
        wishlistIds.push(productId);
        localStorage.setItem('faran-wishlist', JSON.stringify(wishlistIds));
        loadWishlist();
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const removeFromWishlist = (productId: string) => {
    try {
      const stored = localStorage.getItem('faran-wishlist');
      if (stored) {
        const wishlistIds = JSON.parse(stored);
        const updatedIds = wishlistIds.filter((id: string) => id !== productId);
        localStorage.setItem('faran-wishlist', JSON.stringify(updatedIds));
        loadWishlist();
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const isInWishlist = (productId: string) => {
    try {
      const stored = localStorage.getItem('faran-wishlist');
      if (stored) {
        const wishlistIds = JSON.parse(stored);
        return wishlistIds.includes(productId);
      }
    } catch (error) {
      console.error('Error checking wishlist:', error);
    }
    return false;
  };

  // Export functions for use in other components
  (window as any).addToWishlist = addToWishlist;
  (window as any).removeFromWishlist = removeFromWishlist;
  (window as any).isInWishlist = isInWishlist;

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hello! I'm interested in ordering from my wishlist: ${product.name[language]} (${product.price.amount} ${product.price.currency}). Please provide more details.`;
    const whatsappUrl = `https://wa.me/971557993441?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <Heart size={64} className="text-faran-gold/30 mx-auto mb-4" />
        <h3 className="text-xl font-serif text-faran-brown mb-2">
          {isRTL ? "قائمة الأمنيات فارغة" : "Your Wishlist is Empty"}
        </h3>
        <p className="text-faran-brown/70 mb-6">
          {isRTL 
            ? "ابدأ بإضافة العطور المفضلة لديك"
            : "Start adding your favorite fragrances"}
        </p>
        <Link to={`/${language}/shop`} className="btn-luxury">
          {isRTL ? "تسوق الآن" : "Shop Now"}
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12 bg-faran-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-faran-gold" size={24} fill="currentColor" />
            <h3 className="text-2xl font-serif text-faran-brown">
              {isRTL ? "قائمة الأمنيات" : "My Wishlist"}
            </h3>
            <span className="text-faran-brown/60">({wishlistProducts.length})</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistProducts.map((product, index) => (
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
                
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2 bg-white/90 rounded-full hover:bg-red-50 transition-colors group"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-blue-50 transition-colors">
                    <Share2 size={16} className="text-blue-500" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <Link to={`/${language}/product/${product.id}`}>
                  <h4 className="font-serif text-lg text-faran-brown mb-2 hover:text-faran-gold transition-colors">
                    {product.name[language]}
                  </h4>
                </Link>
                
                <p className="text-faran-brown/70 text-sm mb-4 line-clamp-2">
                  {product.description[language]}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {product.scentProfile[language].slice(0, 2).map((note, noteIndex) => (
                    <span key={noteIndex} className="px-2 py-1 bg-faran-beige text-faran-brown text-xs rounded">
                      {note}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-faran-gold">
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
                  className="w-full btn-luxury flex items-center justify-center gap-2 text-sm py-2"
                >
                  <ShoppingBag size={16} />
                  <span>{isRTL ? "اطلب عبر واتساب" : "Order via WhatsApp"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
