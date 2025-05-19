
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const ShopHero = () => {
  const { t, isRTL } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  
  const heroImages = [
    "/lovable-uploads/bb67914c-f910-45dd-b446-aeed9a69a0fd.png", // Elegant perfume in archway
    "/lovable-uploads/e0bc621b-a964-4e70-9b24-c74ab6810dae.png", // Perfume with smoke
  ];

  // Image transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current === 0 ? 1 : 0));
    }, 7000); // Transition every 7 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Background image with transition */}
      {heroImages.map((image, index) => (
        <div 
          key={image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500"
          style={{ 
            backgroundImage: `url('${image}')`,
            opacity: index === activeImage ? 1 : 0,
            filter: "brightness(0.4)",
            transitionDuration: "1.5s"
          }}
        ></div>
      ))}
      
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-faran-black/40 via-transparent to-faran-black"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-white">
            {isRTL ? "مجموعة فاران" : "The FARAN Collection"}
          </h1>
          
          <p className="text-lg md:text-xl font-light mb-8 text-gray-200 max-w-2xl mx-auto">
            {isRTL 
              ? "اكتشف مجموعتنا الحصرية من أرقى أنواع العود والعطور الفاخرة. كل قطعة تروي قصة إرث وحرفية وجودة لا مثيل لها."
              : "Discover our exclusive collection of premium oud and luxury fragrances. Each piece tells a story of heritage, craftsmanship, and uncompromising quality."}
          </p>
          
          <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-8"></div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#oud-chips" 
              className="btn-luxury-outline px-8 py-3"
            >
              {isRTL ? "قطع العود" : "Oud Chips"}
            </a>
            <a 
              href="#perfume-oils" 
              className="btn-luxury-outline px-8 py-3"
            >
              {isRTL ? "زيوت العطور" : "Perfume Oils"}
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-faran-black to-transparent"></div>
    </section>
  );
};

export default ShopHero;
