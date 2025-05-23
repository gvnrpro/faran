
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const CustomOrderHero = () => {
  const { isRTL } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  
  const heroImages = [
    "/lovable-uploads/e1969beb-317c-40fe-8a64-610474e345c6.png",
    "/lovable-uploads/4c1298de-d9f2-4fb7-9c77-16568829518c.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current === 0 ? 1 : 0));
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background image with transition */}
      {heroImages.map((image, index) => (
        <div 
          key={image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500"
          style={{ 
            backgroundImage: `url('${image}')`,
            opacity: index === activeImage ? 1 : 0,
            filter: "brightness(0.7)",
            transitionDuration: "1.5s"
          }}
        ></div>
      ))}
      
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-faran-cream/20 via-transparent to-faran-brown/40"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-white drop-shadow-lg">
            {isRTL ? "طلبات مخصصة" : "Custom Orders"}
          </h1>
          
          <p className="text-lg md:text-xl font-light mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {isRTL 
              ? "تجربة فريدة من نوعها حيث يقوم حرفيونا بتصميم عود مخصص يعكس هويتك وذوقك الفريد. إرث العطر، مُصمم خصيصًا لك."
              : "An unparalleled experience where our master craftsmen create a bespoke oud that reflects your unique identity and preferences. A fragrance legacy, crafted exclusively for you."}
          </p>
          
          <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-8"></div>
          
          <a 
            href="#custom-form" 
            className="btn-luxury px-12 py-4 text-white border-white hover:bg-white hover:text-faran-brown transition-all duration-300"
          >
            {isRTL ? "ابدأ رحلتك" : "Begin Your Journey"}
          </a>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-faran-cream to-transparent"></div>
    </section>
  );
};

export default CustomOrderHero;
