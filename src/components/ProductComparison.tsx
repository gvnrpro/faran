
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Scale, X, Plus, Star, MessageCircle, Heart } from "lucide-react";
import { products } from "@/data/products";

interface CompareProduct {
  id: string;
  name: { en: string; ar: string };
  price: { amount: number; currency: string };
  images: string[];
  scentProfile: { en: string[]; ar: string[] };
  intensity?: string;
  longevity?: string;
  occasion?: { en: string[]; ar: string[] };
  season?: { en: string[]; ar: string[] };
}

const ProductComparison = () => {
  const { language, isRTL } = useLanguage();
  const [compareList, setCompareList] = useState<CompareProduct[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const addToCompare = (product: CompareProduct) => {
    if (compareList.length < 3 && !compareList.find(p => p.id === product.id)) {
      setCompareList([...compareList, product]);
      setIsVisible(true);
    }
  };

  const removeFromCompare = (productId: string) => {
    const newList = compareList.filter(p => p.id !== productId);
    setCompareList(newList);
    if (newList.length === 0) {
      setIsVisible(false);
    }
  };

  const clearComparison = () => {
    setCompareList([]);
    setIsVisible(false);
  };

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Hello! I'm interested in ordering ${productName} (${price}) after comparing it with other fragrances. Please provide more details.`;
    const whatsappUrl = `https://wa.me/971557993441?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Floating comparison toggle
  if (!isVisible && compareList.length === 0) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-faran-gold hover:bg-faran-brass text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title={isRTL ? "مقارنة المنتجات" : "Compare Products"}
        >
          <Scale size={24} />
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Floating Compare Button */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-faran-gold hover:bg-faran-brass text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative"
          >
            <Scale size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {compareList.length}
            </span>
          </button>
        </div>
      )}

      {/* Comparison Panel */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-faran-gold shadow-2xl z-40 max-h-[80vh] overflow-y-auto"
        >
          <div className="container-custom py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Scale size={24} className="text-faran-gold" />
                <h3 className="text-xl font-serif text-faran-night">
                  {isRTL ? "مقارنة العطور" : "Fragrance Comparison"}
                </h3>
                <span className="text-sm text-faran-charcoal/60">
                  ({compareList.length}/3)
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={clearComparison}
                  className="text-sm text-faran-charcoal hover:text-faran-gold transition-colors"
                >
                  {isRTL ? "مسح الكل" : "Clear All"}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-faran-beige rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {compareList.length === 0 ? (
              /* Empty State */
              <div className="text-center py-12">
                <Scale size={48} className="text-faran-gold/50 mx-auto mb-4" />
                <h4 className="text-lg font-serif text-faran-night mb-2">
                  {isRTL ? "ابدأ بإضافة عطور للمقارنة" : "Start adding fragrances to compare"}
                </h4>
                <p className="text-faran-charcoal/70 mb-6">
                  {isRTL 
                    ? "يمكنك مقارنة حتى 3 عطور لتجد الأنسب لك"
                    : "You can compare up to 3 fragrances to find the perfect one"}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {products.slice(0, 6).map((product) => (
                    <button
                      key={product.id}
                      onClick={() => addToCompare(product)}
                      className="px-4 py-2 border border-faran-gold/30 rounded-full text-sm hover:border-faran-gold hover:bg-faran-gold/10 transition-colors"
                    >
                      + {product.name[language]}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Comparison Table */
              <div className="overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full">
                  {compareList.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-faran-beige rounded-lg p-6 relative"
                    >
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute top-4 right-4 p-1 hover:bg-white rounded-full transition-colors"
                      >
                        <X size={16} />
                      </button>

                      {/* Product Image */}
                      <div className="aspect-square rounded-lg overflow-hidden mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name[language]}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <h4 className="font-serif text-lg text-faran-night mb-2">
                        {product.name[language]}
                      </h4>
                      
                      <div className="text-xl font-bold text-faran-gold mb-4">
                        {product.price.amount} {product.price.currency}
                      </div>

                      {/* Comparison Attributes */}
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-faran-charcoal">
                            {isRTL ? "النوتات:" : "Notes:"}
                          </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {product.scentProfile[language].slice(0, 3).map((note, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white text-faran-charcoal text-xs rounded">
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>

                        {product.intensity && (
                          <div>
                            <span className="font-medium text-faran-charcoal">
                              {isRTL ? "القوة:" : "Intensity:"}
                            </span>
                            <span className="ml-2 text-faran-charcoal/80">{product.intensity}</span>
                          </div>
                        )}

                        {product.longevity && (
                          <div>
                            <span className="font-medium text-faran-charcoal">
                              {isRTL ? "الثبات:" : "Longevity:"}
                            </span>
                            <span className="ml-2 text-faran-charcoal/80">{product.longevity}</span>
                          </div>
                        )}

                        {product.occasion && (
                          <div>
                            <span className="font-medium text-faran-charcoal">
                              {isRTL ? "المناسبة:" : "Occasion:"}
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.occasion[language].slice(0, 2).map((occ, idx) => (
                                <span key={idx} className="px-2 py-1 bg-faran-gold/20 text-faran-gold text-xs rounded">
                                  {occ}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-6">
                        <button
                          onClick={() => handleWhatsAppOrder(
                            product.name[language],
                            `${product.price.amount} ${product.price.currency}`
                          )}
                          className="flex-1 btn-luxury-outline flex items-center justify-center gap-2 text-xs py-2"
                        >
                          <MessageCircle size={14} />
                          {isRTL ? "اطلب" : "Order"}
                        </button>
                        <button className="p-2 border border-faran-gold/30 rounded hover:bg-faran-gold/10 transition-colors">
                          <Heart size={16} className="text-faran-gold" />
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {/* Add More Button */}
                  {compareList.length < 3 && (
                    <div className="bg-faran-beige/50 rounded-lg p-6 border-2 border-dashed border-faran-gold/30 flex flex-col items-center justify-center min-h-[400px]">
                      <Plus size={48} className="text-faran-gold/50 mb-4" />
                      <h4 className="font-serif text-faran-night mb-2">
                        {isRTL ? "أضف عطراً آخر" : "Add Another Fragrance"}
                      </h4>
                      <p className="text-sm text-faran-charcoal/70 text-center mb-4">
                        {isRTL 
                          ? "قارن حتى 3 عطور لاتخاذ القرار الأمثل"
                          : "Compare up to 3 fragrances to make the best choice"}
                      </p>
                      <select
                        onChange={(e) => {
                          const selectedProduct = products.find(p => p.id === e.target.value);
                          if (selectedProduct) {
                            addToCompare(selectedProduct);
                            e.target.value = '';
                          }
                        }}
                        className="w-full p-2 border border-faran-gold/30 rounded focus:border-faran-gold focus:outline-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {isRTL ? "اختر عطراً" : "Choose a fragrance"}
                        </option>
                        {products
                          .filter(p => !compareList.find(cp => cp.id === p.id))
                          .map(product => (
                            <option key={product.id} value={product.id}>
                              {product.name[language]}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Comparison Insights */}
            {compareList.length > 1 && (
              <div className="mt-8 p-6 bg-faran-gold/10 rounded-lg">
                <h4 className="font-serif text-faran-night mb-4">
                  {isRTL ? "نصائح للاختيار" : "Selection Tips"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-faran-night">
                      {isRTL ? "للمناسبات الخاصة:" : "For Special Occasions:"}
                    </strong>
                    <p className="text-faran-charcoal/80">
                      {isRTL 
                        ? "اختر العطر الأقوى تركيزاً والأطول ثباتاً"
                        : "Choose the stronger concentration and longer-lasting fragrance"}
                    </p>
                  </div>
                  <div>
                    <strong className="text-faran-night">
                      {isRTL ? "للاستخدام اليومي:" : "For Daily Use:"}
                    </strong>
                    <p className="text-faran-charcoal/80">
                      {isRTL 
                        ? "اختر العطر الأخف والأكثر انتعاشاً"
                        : "Choose the lighter and more refreshing option"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProductComparison;
