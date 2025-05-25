import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Eye } from "lucide-react";
import { getProductById } from "@/data/products";
import { Product } from "@/types/product";

const RecentlyViewed = () => {
  const { language, isRTL } = useLanguage();
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getRecentlyViewed = () => {
      try {
        const stored = localStorage.getItem('faran-recently-viewed');
        if (stored) {
          const productIds = JSON.parse(stored) as string[];
          const products = productIds
            .map(id => getProductById(id))
            .filter((product): product is Product => product !== undefined)
            .slice(0, 4);
          setRecentProducts(products);
        }
      } catch (error) {
        console.error('Error loading recently viewed products:', error);
      }
    };

    getRecentlyViewed();
  }, []);

  // Function to add product to recently viewed (to be called from product pages)
  const addToRecentlyViewed = (productId: string) => {
    try {
      const stored = localStorage.getItem('faran-recently-viewed');
      let recentIds = stored ? JSON.parse(stored) : [];
      
      // Remove if already exists and add to beginning
      recentIds = recentIds.filter((id: string) => id !== productId);
      recentIds.unshift(productId);
      
      // Keep only last 10 items
      recentIds = recentIds.slice(0, 10);
      
      localStorage.setItem('faran-recently-viewed', JSON.stringify(recentIds));
    } catch (error) {
      console.error('Error saving to recently viewed:', error);
    }
  };

  // Export function for use in other components
  (window as any).addToRecentlyViewed = addToRecentlyViewed;

  if (recentProducts.length === 0) return null;

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
            <Clock className="text-faran-gold" size={24} />
            <h3 className="text-2xl font-serif text-faran-brown">
              {isRTL ? "شاهدت مؤخراً" : "Recently Viewed"}
            </h3>
          </div>
          <p className="text-faran-brown/70">
            {isRTL 
              ? "العطور التي تصفحتها مؤخراً"
              : "Fragrances you've recently explored"}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/${language}/product/${product.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-faran-gold/90 text-white text-xs rounded-full">
                        <Eye size={12} />
                        <span>{isRTL ? "مُشاهد" : "Viewed"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif text-lg text-faran-brown mb-2 hover:text-faran-gold transition-colors line-clamp-1">
                      {product.name[language]}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-faran-gold font-semibold">
                        {product.price.amount} {product.price.currency}
                      </span>
                      {product.intensity && (
                        <span className="text-xs text-faran-brown/60 bg-faran-beige px-2 py-1 rounded">
                          {product.intensity}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
