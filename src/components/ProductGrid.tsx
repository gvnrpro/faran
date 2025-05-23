
import React, { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Heart, Star, Search, Filter, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";

const ProductGrid = () => {
  const { language, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: { en: 'All Products', ar: 'جميع المنتجات' } },
    { id: 'premium-oud', name: { en: 'Premium Oud', ar: 'عود ممتاز' } },
    { id: 'royal-oud', name: { en: 'Royal Collection', ar: 'المجموعة الملكية' } },
    { id: 'signature-oud', name: { en: 'Signature', ar: 'التوقيع' } },
    { id: 'super-premium', name: { en: 'Super Premium', ar: 'فاخر جداً' } }
  ];

  const priceRanges = [
    { id: 'all', name: { en: 'All Prices', ar: 'جميع الأسعار' } },
    { id: 'under-2000', name: { en: 'Under 2,000 AED', ar: 'أقل من 2,000 درهم' } },
    { id: '2000-3000', name: { en: '2,000 - 3,000 AED', ar: '2,000 - 3,000 درهم' } },
    { id: 'over-3000', name: { en: 'Over 3,000 AED', ar: 'أكثر من 3,000 درهم' } }
  ];

  const sortOptions = [
    { id: 'featured', name: { en: 'Featured', ar: 'مميز' } },
    { id: 'price-low', name: { en: 'Price: Low to High', ar: 'السعر: من الأقل للأعلى' } },
    { id: 'price-high', name: { en: 'Price: High to Low', ar: 'السعر: من الأعلى للأقل' } },
    { id: 'name', name: { en: 'Name A-Z', ar: 'الاسم أ-ي' } }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.scentProfile[language].some(note => 
          note.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(product => {
        const price = product.price.amount;
        switch (priceRange) {
          case 'under-2000':
            return price < 2000;
          case '2000-3000':
            return price >= 2000 && price <= 3000;
          case 'over-3000':
            return price > 3000;
          default:
            return true;
        }
      });
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price.amount - b.price.amount;
        case 'price-high':
          return b.price.amount - a.price.amount;
        case 'name':
          return a.name[language].localeCompare(b.name[language]);
        default:
          return 0; // Keep original order for featured
      }
    });

    return sorted;
  }, [searchTerm, selectedCategory, priceRange, sortBy, language]);

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

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-faran-brown/50" />
              <input
                type="text"
                placeholder={isRTL ? "ابحث عن العطر..." : "Search fragrances..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-faran-gold/30 rounded-lg bg-white focus:border-faran-gold focus:outline-none text-faran-brown"
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <div className="text-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-faran-gold/30 rounded-lg hover:border-faran-gold transition-colors"
            >
              <SlidersHorizontal size={18} />
              <span>{isRTL ? "المرشحات" : "Filters"}</span>
              <span className="text-sm text-faran-brown/60">
                ({filteredAndSortedProducts.length})
              </span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-faran-gold/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-faran-brown mb-3">
                    {isRTL ? "الفئة" : "Category"}
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 border border-faran-gold/30 rounded-lg bg-white focus:border-faran-gold focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name[language]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-faran-brown mb-3">
                    {isRTL ? "نطاق السعر" : "Price Range"}
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full p-3 border border-faran-gold/30 rounded-lg bg-white focus:border-faran-gold focus:outline-none"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name[language]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-faran-brown mb-3">
                    {isRTL ? "ترتيب حسب" : "Sort By"}
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border border-faran-gold/30 rounded-lg bg-white focus:border-faran-gold focus:outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name[language]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="mt-6 pt-4 border-t border-faran-gold/20">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setSortBy('featured');
                  }}
                  className="text-faran-gold hover:text-faran-darkGold text-sm font-medium"
                >
                  {isRTL ? "مسح جميع المرشحات" : "Clear All Filters"}
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product, index) => (
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

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-faran-brown/60 mb-4">
              <Filter size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-serif text-faran-brown mb-2">
                {isRTL ? "لا توجد نتائج" : "No Results Found"}
              </h3>
              <p>
                {isRTL 
                  ? "جرب تعديل معايير البحث أو المرشحات"
                  : "Try adjusting your search criteria or filters"}
              </p>
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
                setSortBy('featured');
              }}
              className="btn-luxury-outline"
            >
              {isRTL ? "مسح المرشحات" : "Clear Filters"}
            </button>
          </div>
        )}

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
