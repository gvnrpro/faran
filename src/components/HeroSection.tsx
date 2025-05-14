
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <section id="home" className={`relative h-screen flex items-center justify-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transform scale-110" 
        style={{
          backgroundImage: "url('/lovable-uploads/fe69bde4-6095-4387-ae74-d59c91e87a43.png')",
          backgroundPosition: "center",
          transform: "translateZ(-10px) scale(2)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-faran-black/90 via-faran-black/70 to-faran-black/90"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center mx-auto px-4">
        <div className="fade-in-up">
          <h1 className="text-white mb-6 font-serif">
            <span className="block text-faran-gold mb-3">FARAN</span>
            <span className="block text-xl md:text-2xl font-light tracking-wider">{t("hero.tagline")}</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            {t("hero.description")}
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a href="#collection" className="btn btn-primary animate-fade-in" style={{animationDelay: '0.3s'}}>
              {t("hero.cta1")}
            </a>
            <a href="#craftsmanship" className="btn btn-secondary animate-fade-in" style={{animationDelay: '0.6s'}}>
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating product image */}
      <div className="absolute bottom-20 sm:bottom-40 right-5 sm:right-20 w-40 sm:w-60 md:w-80 opacity-90 animate-float hidden md:block">
        <img 
          src="/lovable-uploads/03c8d73e-c8cd-426d-a331-5dcf3d592e6d.png"
          alt="FARAN Luxury Oud" 
          className="w-full drop-shadow-2xl"
        />
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-white/50 text-sm mb-2">{isRTL ? 'اسحب' : 'Scroll'}</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
