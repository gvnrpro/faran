
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import ShopHero from "@/components/ShopHero";
import ProductGrid from "@/components/ProductGrid";

const Shop = () => {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "FARAN Premium Oud Collection",
    "description": "Discover FARAN's exquisite collection of rare and premium oud products, crafted with mastery and heritage.",
    "provider": {
      "@type": "Organization",
      "name": "FARAN",
      "logo": "/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png"
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
          title="Premium Oud Collection | FARAN"
          description="Explore FARAN's exclusive collection of premium oud products. Discover rare agarwood, luxury perfumes, and artisanal creations that embody Arabian heritage."
          ogImage="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png"
        >
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </SEO>
        
        <Navbar />
        <ShopHero />
        <ProductGrid />
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

export default Shop;
