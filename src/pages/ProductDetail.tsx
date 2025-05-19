
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    // Set RTL/LTR for the whole page
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup
    };
  }, [language, isRTL]);

  // In a real app, you would fetch the product data based on productId
  const product = {
    id: productId,
    name: "Royal Oud",
    subtitle: "Signature Collection",
    type: "Perfume Oil",
    price: 1200,
    currency: "AED",
    images: [
      "/lovable-uploads/a7a7fd34-ff28-451e-ad1d-d4ceeb0e9d3b.png",
      "/lovable-uploads/c3d22462-b827-4392-aa31-52651e0b2b19.png"
    ],
    description: "Notes of rare Indian agarwood, precious ambergris, and mountain-harvested saffron create a scent worthy of nobility.",
    detailedDescription: "From the misty forests of Northeast India, our Assam Agarwood is known for its sweet, deep, and balsamic notes with subtle hints of fruit. We select only the most resinous pieces, considering the forest's altitude and the tree's age for optimal fragrance profile.",
    origin: "Northeast India",
    scent: {
      top: "Citrus, Bergamot",
      middle: "Agarwood, Rose",
      base: "Ambergris, Musk"
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images[0],
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "FARAN"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": product.currency,
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-faran-black text-white min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <SEO 
          title={`${product.name} | FARAN`}
          description={product.description}
          ogImage={product.images[0]}
        >
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </SEO>
        
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-square gold-border">
                  <div className="gold-border-content">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="aspect-square border border-faran-gold/30 cursor-pointer hover:border-faran-gold transition-colors">
                      <img 
                        src={image} 
                        alt={`${product.name} - view ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Product info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-faran-gold mb-2">{product.subtitle}</div>
                <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
                
                <div className="w-16 h-[1px] bg-faran-gold mb-6"></div>
                
                <div className="text-2xl font-light mb-6">
                  {product.currency} {product.price}
                </div>
                
                <p className="text-gray-300 mb-8">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-serif mb-3">{isRTL ? "تفاصيل المنتج" : "Product Details"}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <span className="text-faran-gold/70">{isRTL ? "النوع:" : "Type:"}</span> {product.type}
                    </li>
                    <li>
                      <span className="text-faran-gold/70">{isRTL ? "المصدر:" : "Origin:"}</span> {product.origin}
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-serif mb-3">{isRTL ? "مكونات العطر" : "Scent Profile"}</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><span className="text-faran-gold/70">{isRTL ? "النوتة العليا:" : "Top Notes:"}</span> {product.scent.top}</p>
                    <p><span className="text-faran-gold/70">{isRTL ? "النوتة الوسطى:" : "Heart Notes:"}</span> {product.scent.middle}</p>
                    <p><span className="text-faran-gold/70">{isRTL ? "النوتة الأساسية:" : "Base Notes:"}</span> {product.scent.base}</p>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <button className="btn-luxury w-full py-4">
                    {isRTL ? "أضف إلى السلة" : "Add to Cart"}
                  </button>
                  
                  <button className="btn-luxury-outline w-full py-4">
                    {isRTL ? "أضف إلى المفضلة" : "Add to Wishlist"}
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Additional product information */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">
                  {isRTL ? "وصف مفصل" : "Detailed Description"}
                </h2>
                <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
        
        {/* Luxury corner elements */}
        <div className="fixed top-0 left-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1px] h-12 bg-gradient-to-b from-faran-gold/80 to-transparent"></div>
          <div className="absolute top-0 left-0 h-[1px] w-12 bg-gradient-to-r from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed top-0 right-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-faran-gold/80 to-transparent"></div>
          <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed bottom-0 left-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[1px] h-12 bg-gradient-to-t from-faran-gold/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-[1px] w-12 bg-gradient-to-r from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed bottom-0 right-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-gradient-to-t from-faran-gold/80 to-transparent"></div>
          <div className="absolute bottom-0 right-0 h-[1px] w-12 bg-gradient-to-l from-faran-gold/80 to-transparent"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetail;
