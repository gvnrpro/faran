
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import CustomOrderHero from "@/components/CustomOrderHero";
import CustomOrderForm from "@/components/CustomOrderForm";
import CustomOrderProcess from "@/components/CustomOrderProcess";

const CustomOrders = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
    window.scrollTo(0, 0);
  }, [language, isRTL]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FARAN Custom Oud Orders",
    "description": "Bespoke oud and fragrance creation service by FARAN master craftsmen",
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
          title={isRTL ? "طلبات مخصصة | فاران" : "Custom Orders | FARAN"}
          description={isRTL 
            ? "اطلب عطر مخصص من فاران. خدمة حصرية لإنشاء عود فريد يعكس شخصيتك وذوقك الخاص."
            : "Order a custom fragrance from FARAN. Exclusive service to create a unique oud that reflects your personality and taste."}
          ogImage="/lovable-uploads/e1969beb-317c-40fe-8a64-610474e345c6.png"
        >
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </SEO>
        
        <Navbar />
        <CustomOrderHero />
        <CustomOrderProcess />
        <CustomOrderForm />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomOrders;
