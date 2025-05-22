
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
        className={`bg-faran-cream text-faran-brown min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Shop;
