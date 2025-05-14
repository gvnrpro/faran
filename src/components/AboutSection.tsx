
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className={`section bg-gradient-to-b from-faran-black to-faran-charcoal ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className={`order-2 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-6">
              <h2 className="text-faran-gold mb-4 font-light tracking-wide">{t("about.title")}</h2>
              <div className="w-20 h-px bg-faran-gold/60 mb-10"></div>
            </div>
            <p className="text-lg mb-8 leading-relaxed font-light">
              {t("about.p1")}
            </p>
            <p className="text-lg mb-8 leading-relaxed font-light">
              {t("about.p2")}
            </p>
            <p className="text-lg mb-10 leading-relaxed font-light">
              {t("about.p3")}
            </p>
            <div className="flex items-center">
              <div className="w-12 h-px bg-faran-gold mr-4"></div>
              <span className="text-faran-gold italic font-serif">{t("about.tagline")}</span>
            </div>
          </motion.div>
          
          <motion.div 
            className={`order-1 ${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="gold-border">
              <div className="gold-border-content">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/e163adc4-b7bb-43eb-b9f9-79c9ca278d1a.png" 
                    alt="FARAN perfume bottle" 
                    className="object-cover w-full h-full transform transition-all duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 to-transparent"></div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -right-10 w-32 h-32 rotate-6 transform hover:rotate-0 transition-transform duration-500 z-10"
              whileHover={{ rotate: 0 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full p-5 bg-faran-black border border-faran-gold/30 flex items-center justify-center shadow-2xl">
                <img 
                  src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png" 
                  alt="FARAN logo" 
                  className="w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
