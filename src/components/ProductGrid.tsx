
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Heart, Star } from "lucide-react";
import { products } from "@/data/products";

const ProductGrid = () => {
  const { language, isRTL } = useLanguage();

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Hello! I'm interested in ordering ${productName} (${price}). Please provide more details.`;
    const whatsappUrl = `https://wa.me/971557993441?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-faran-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-faran-brown mb-6">
            {isRTL ? "مجموعتنا الحصرية" : "Our Exclusive Collection"}
          </h2>
          <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
          <p className="text-lg text-faran-brown/80 max-w-2xl mx-auto">
            {isRTL 
              ? "اكتشف مجموعة فاران الفاخرة من العود الأصيل والعطور الراقية"
              : "Discover FARAN's luxury collection of authentic oud and premium fragrances"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 product-card-hover">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Link to={`/${language}/product/${product.id}`}>
                    <img 
                      src={product.images[0]} 
                      alt={product.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all mb-2 block">
                      <Heart size={16} className="text-faran-brown hover:text-faran-gold" />
                    </button>
                  </div>
                  
                  {/* Stock Badge */}
                  {product.inStock && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {isRTL ? "متوفر" : "In Stock"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <Link to={`/${language}/product/${product.id}`}>
                    <h3 className="font-serif text-lg text-faran-brown mb-2 hover:text-faran-gold transition-colors">
                      {product.name[language]}
                    </h3>
                  </Link>
                  
                  <p className="text-faran-brown/70 text-sm mb-4 line-clamp-2">
                    {product.description[language]}
                  </p>

                  {/* Scent Profile Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.scentProfile[language].slice(0, 2).map((note, noteIndex) => (
                      <span key={noteIndex} className="px-2 py-1 bg-faran-beige text-faran-brown text-xs rounded">
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-faran-gold">
                      {product.price.amount} {product.price.currency}
                    </span>
                    {product.intensity && (
                      <span className="text-xs text-faran-brown/60 bg-faran-beige px-2 py-1 rounded">
                        {product.intensity}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleWhatsAppOrder(
                        product.name[language], 
                        `${product.price.amount} ${product.price.currency}`
                      )}
                      className="w-full btn-luxury-outline flex items-center justify-center gap-2 text-sm py-2"
                    >
                      <MessageCircle size={16} />
                      <span>{isRTL ? "اطلب عبر واتساب" : "Order via WhatsApp"}</span>
                    </button>
                    
                    <Link 
                      to={`/${language}/product/${product.id}`}
                      className="w-full btn-luxury flex items-center justify-center text-sm py-2"
                    >
                      {isRTL ? "عرض التفاصيل" : "View Details"}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-faran-brown/80 mb-6">
            {isRTL 
              ? "لم تجد ما تبحث عنه؟ تواصل معنا لطلب مخصص"
              : "Can't find what you're looking for? Contact us for a custom order"}
          </p>
          <Link 
            to={`/${language}/custom-orders`}
            className="btn-luxury inline-flex items-center gap-2"
          >
            {isRTL ? "طلب مخصص" : "Custom Order"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
