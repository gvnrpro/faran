import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, Star, Heart, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProductRecommendations from "@/components/ProductRecommendations";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, isRTL } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = productId ? getProductById(productId) : null;
  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 3);

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    window.scrollTo(0, 0);

    // Add to recently viewed
    if (productId && (window as any).addToRecentlyViewed) {
      (window as any).addToRecentlyViewed(productId);
    }

    // Check if product is in wishlist
    if (productId && (window as any).isInWishlist) {
      setIsWishlisted((window as any).isInWishlist(productId));
    }
  }, [language, isRTL, productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-faran-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-faran-brown mb-4">
            {isRTL ? "المنتج غير موجود" : "Product Not Found"}
          </h1>
          <Link to={`/${language}/shop`} className="btn-luxury">
            {isRTL ? "العودة للمتجر" : "Back to Shop"}
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Hello! I'm interested in ordering ${product.name[language]} (${product.price.amount} ${product.price.currency}). Please provide more details.`;
    const whatsappUrl = `https://wa.me/971557993441?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleWishlist = () => {
    if (!productId) return;
    
    if (isWishlisted) {
      if ((window as any).removeFromWishlist) {
        (window as any).removeFromWishlist(productId);
        setIsWishlisted(false);
      }
    } else {
      if ((window as any).addToWishlist) {
        (window as any).addToWishlist(productId);
        setIsWishlisted(true);
      }
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-faran-cream min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <SEO 
          title={`${product.name[language]} | FARAN`}
          description={product.description[language]}
          ogImage={product.images[0]}
        />
        
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-faran-brown/60">
                <li><Link to={`/${language}`} className="hover:text-faran-gold">{isRTL ? "الرئيسية" : "Home"}</Link></li>
                <li className="mx-2">/</li>
                <li><Link to={`/${language}/shop`} className="hover:text-faran-gold">{isRTL ? "المتجر" : "Shop"}</Link></li>
                <li className="mx-2">/</li>
                <li className="text-faran-gold">{product.name[language]}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={product.images[currentImageIndex]} 
                    alt={product.name[language]}
                    className="w-full h-full object-cover"
                  />
                  {product.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all"
                      >
                        <ArrowLeft size={20} className="text-faran-brown" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all"
                      >
                        <ArrowRight size={20} className="text-faran-brown" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="flex space-x-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-faran-gold' : 'border-transparent'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${product.name[language]} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-serif text-faran-brown mb-4">{product.name[language]}</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-faran-gold">{product.price.amount} {product.price.currency}</span>
                    {product.inStock && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {isRTL ? "متوفر" : "In Stock"}
                      </span>
                    )}
                  </div>
                  <p className="text-faran-brown/80 leading-relaxed">{product.description[language]}</p>
                </div>

                {/* Scent Profile */}
                <div>
                  <h3 className="text-lg font-serif text-faran-brown mb-3">{isRTL ? "ملف العطر" : "Scent Profile"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.scentProfile[language].map((note, index) => (
                      <span key={index} className="px-3 py-1 bg-faran-beige text-faran-brown rounded-full text-sm border border-faran-gold/20">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Origin */}
                <div>
                  <h3 className="text-lg font-serif text-faran-brown mb-2">{isRTL ? "المنشأ" : "Origin"}</h3>
                  <p className="text-faran-brown/80">{product.origin[language]}</p>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="btn-luxury w-full flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    <span>{isRTL ? "اطلب عبر واتساب" : "Order via WhatsApp"}</span>
                  </button>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={toggleWishlist}
                      className={`flex-1 btn-luxury-outline flex items-center justify-center gap-2 ${
                        isWishlisted ? 'bg-faran-gold text-white border-faran-gold' : ''
                      }`}
                    >
                      <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                      <span>{isRTL ? "المفضلة" : "Wishlist"}</span>
                    </button>
                    <button className="flex-1 btn-luxury-outline flex items-center justify-center gap-2">
                      <Share2 size={16} />
                      <span>{isRTL ? "مشاركة" : "Share"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Distillation Notes */}
            <div className="mb-16 p-8 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif text-faran-brown mb-4">
                {isRTL ? "ملاحظات التقطير" : "Distillation Notes"}
              </h2>
              <p className="text-faran-brown/80 leading-relaxed">{product.distillationNotes[language]}</p>
            </div>

            {/* Smart Recommendations */}
            <ProductRecommendations currentProductId={productId} />

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif text-faran-brown mb-8 text-center">
                  {isRTL ? "منتجات ذات صلة" : "Related Products"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      to={`/${language}/product/${relatedProduct.id}`}
                      className="group"
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={relatedProduct.images[0]} 
                            alt={relatedProduct.name[language]}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif text-faran-brown mb-2">{relatedProduct.name[language]}</h3>
                          <p className="text-faran-gold font-semibold">{relatedProduct.price.amount} {relatedProduct.price.currency}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetail;
