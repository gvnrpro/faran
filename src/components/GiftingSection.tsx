
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const GiftingSection = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <section className={`py-16 bg-faran-beige/10 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className={`relative ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="aspect-[4/5] relative z-10 overflow-hidden">
              <img 
                src="/lovable-uploads/554308cd-5aca-4132-a478-e2d0dd2725f9.png" 
                alt="FARAN being gifted" 
                className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className={`absolute top-10 ${isRTL ? '-left-10' : '-right-10'} w-40 h-40 border-2 border-faran-gold z-0`}></div>
            <div className={`absolute -bottom-10 ${isRTL ? '-right-10' : '-left-10'} w-64 h-64 border-2 border-faran-gold z-0`}></div>
          </div>
          
          <div className={isRTL ? 'lg:order-1' : 'lg:order-2'}>
            <div className="mb-6">
              <div className={`w-16 h-px bg-faran-gold mb-6 ${isRTL ? 'mr-auto' : 'ml-0'}`}></div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{t("gifting.title")}</h2>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed">
              {t("gifting.description")}
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              {t("gifting.subtitle")}
            </p>
            
            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${isRTL ? 'sm:space-x-reverse' : ''}`}>
              <a href="#collection" className="btn btn-primary">
                {t("gifting.cta")}
              </a>
              <a href="#" className="btn btn-secondary">
                {isRTL ? "التغليف المخصص" : "Custom Packaging"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingSection;
