
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Star, Filter } from "lucide-react";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const { language, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: { en: 'All Products', ar: 'جميع المنتجات' } },
    { id: 'premium-oud', name: { en: 'Premium Oud', ar: 'عود ممتاز' } },
    { id: 'royal-oud', name: { en: 'Royal Collection', ar: 'المجموعة الملكية' } },
    { id: 'signature-oud', name: { en: 'Signature', ar: 'التوقيع' } }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products.slice(0, 6) 
    : products.filter(product => product.category === activeFilter).slice(0, 6);

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
            {isRTL ? "مجموعتنا المميزة" : "Featured Collection"}
          </h2>
          <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
          <p className="text-lg text-faran-brown/80 max-w-2xl mx-auto mb-12">
            {isRTL 
              ? "اكتشف أرقى العطور المختارة بعناية من مجموعة فاران الحصرية"
              : "Discover our carefully curated selection of the finest fragrances from FARAN's exclusive collection"}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-faran-gold text-white border-faran-gold'
                    : 'bg-white text-faran-brown border-faran-gold/30 hover:border-faran-gold hover:bg-faran-gold/10'
                }`}
              >
                {filter.name[language]}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 luxury-card">
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Link to={`/${language}/product/${product.id}`}>
                    <img 
                      src={product.images[0]} 
                      alt={product.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  
                  {/* Premium Badge */}
                  {product.category === 'super-premium' && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 px-3 py-1 bg-faran-gold text-white text-xs rounded-full">
                        <Star size={12} fill="currentColor" />
                        <span>{isRTL ? "فاخر" : "Premium"}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Stock Badge */}
                  {product.inStock && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {isRTL ? "متوفر" : "In Stock"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <Link to={`/${language}/product/${product.id}`}>
                    <h3 className="font-serif text-xl text-faran-brown mb-2 hover:text-faran-gold transition-colors">
                      {product.name[language]}
                    </h3>
                  </Link>
                  
                  <p className="text-faran-brown/70 text-sm mb-4 line-clamp-2">
                    {product.description[language]}
                  </p>

                  {/* Scent Profile Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.scentProfile[language].slice(0, 3).map((note, noteIndex) => (
                      <span key={noteIndex} className="px-2 py-1 bg-faran-beige text-faran-brown text-xs rounded-full">
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Price and Intensity */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-faran-gold">
                      {product.price.amount} {product.price.currency}
                    </span>
                    {product.intensity && (
                      <span className="text-xs text-faran-brown/60 bg-faran-beige px-2 py-1 rounded">
                        {product.intensity}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleWhatsAppOrder(
                        product.name[language], 
                        `${product.price.amount} ${product.price.currency}`
                      )}
                      className="btn-luxury-outline flex items-center justify-center gap-2 text-sm py-2 px-4"
                    >
                      <MessageCircle size={14} />
                      <span>{isRTL ? "اطلب" : "Order"}</span>
                    </button>
                    
                    <Link 
                      to={`/${language}/product/${product.id}`}
                      className="btn-luxury flex items-center justify-center text-sm py-2 px-4"
                    >
                      {isRTL ? "التفاصيل" : "Details"}
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
          className="text-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-faran-brown mb-4">
              {isRTL ? "اكتشف المجموعة الكاملة" : "Explore Our Full Collection"}
            </h3>
            <p className="text-faran-brown/80 mb-6">
              {isRTL 
                ? "أكثر من 8 عطور حصرية تنتظر اكتشافك. كل عطر له قصة فريدة وتجربة لا تُنسى."
                : "Over 8 exclusive fragrances await your discovery. Each scent tells a unique story and offers an unforgettable experience."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={`/${language}/shop`}
                className="btn-luxury inline-flex items-center gap-2"
              >
                <Filter size={16} />
                {isRTL ? "تسوق الآن" : "Shop Now"}
              </Link>
              <Link 
                to={`/${language}/custom-orders`}
                className="btn-luxury-outline inline-flex items-center gap-2"
              >
                {isRTL ? "طلب مخصص" : "Custom Order"}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
