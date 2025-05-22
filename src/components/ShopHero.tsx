
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const ShopHero = () => {
  const { t, isRTL, language } = useLanguage();
  
  return (
    <section className="relative py-32 bg-faran-beige">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e163adc4-b7bb-43eb-b9f9-79c9ca278d1a.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-faran-gold to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-faran-gold to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-faran-brown">
            {isRTL ? "مجموعة فاران الحصرية" : "FARAN Exclusive Collection"}
          </h1>
          
          <p className="text-lg md:text-xl font-light mb-8 text-faran-brown/80 max-w-2xl mx-auto">
            {isRTL 
              ? "اكتشف مجموعتنا الحصرية من أرقى أنواع العود والعطور الفاخرة. عبق الأجداد، يُرتدى بفخر ويُورث بعناية."
              : "The scent of ancestry. Passed from palm to palm, tent to palace—FARAN is not merely worn; it is inherited."}
          </p>
          
          <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-8"></div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#bestsellers" 
              className="btn-luxury-outline px-8 py-3"
            >
              {isRTL ? "الأكثر مبيعاً" : "Bestsellers"}
            </a>
            <a 
              href="#profile" 
              className="btn-luxury px-8 py-3"
            >
              {isRTL ? "تسوق حسب الاستخدام" : "Shop by Profile"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopHero;
