
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Wishlist from "@/components/Wishlist";

const WishlistPage = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    window.scrollTo(0, 0);
  }, [language, isRTL]);

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
          title={`${isRTL ? 'قائمة الأمنيات' : 'Wishlist'} | FARAN`}
          description={isRTL 
            ? "قائمة العطور المفضلة لديك من مجموعة فاران الفاخرة"
            : "Your favorite fragrances from FARAN's luxury collection"
          }
        />
        
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-faran-brown mb-4">
                {isRTL ? "قائمة الأمنيات" : "My Wishlist"}
              </h1>
              <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
              <p className="text-lg text-faran-brown/80 max-w-2xl mx-auto">
                {isRTL 
                  ? "عطورك المفضلة محفوظة هنا لتتمكن من طلبها لاحقاً"
                  : "Your favorite fragrances saved here for easy ordering later"}
              </p>
            </div>
            
            <Wishlist />
          </div>
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default WishlistPage;
