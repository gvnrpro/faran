
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className={`section bg-faran-black text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-faran-gold mb-6">{t("about.title")}</h2>
            <p className="text-lg mb-6 leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              {t("about.p3")}
            </p>
            <div className="flex items-center">
              <div className="w-12 h-px bg-faran-gold mr-4"></div>
              <span className="text-faran-gold italic font-serif">{t("about.tagline")}</span>
            </div>
          </div>
          
          <div className={`order-1 ${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}>
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src="/lovable-uploads/e163adc4-b7bb-43eb-b9f9-79c9ca278d1a.png" 
                alt="FARAN perfume bottle" 
                className="object-cover w-full h-full transform transition-all duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faran-black/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 p-4 bg-faran-brown flex items-center justify-center rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png" 
                alt="FARAN logo" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
