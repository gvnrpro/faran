
import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = sectionRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = 30 * (0.5 - x);
      const moveY = 30 * (0.5 - y);
      
      const bg = sectionRef.current.querySelector('.parallax-bg') as HTMLElement;
      if (bg) {
        bg.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.1)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      id="home" 
      ref={sectionRef}
      className={`relative h-screen w-full flex items-center justify-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
    >
      {/* Background with parallax effect */}
      <div 
        className="parallax-bg absolute inset-0 bg-cover bg-center z-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/lovable-uploads/fe69bde4-6095-4387-ae74-d59c91e87a43.png')",
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-faran-black/90 via-faran-black/70 to-faran-black/90"></div>
      </div>
      
      {/* Golden line design elements */}
      <div className="absolute top-[15%] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-faran-gold/80 to-transparent"></div>
      <div className="absolute bottom-[15%] right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-faran-gold/80 to-transparent"></div>
      <div className="absolute top-1/4 right-20 h-32 w-px bg-gradient-to-b from-transparent via-faran-gold/50 to-transparent hidden md:block"></div>
      <div className="absolute bottom-1/4 left-20 h-32 w-px bg-gradient-to-t from-transparent via-faran-gold/50 to-transparent hidden md:block"></div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="container-custom relative z-10 text-center mx-auto px-4"
      >
        <div>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <img 
              src="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png" 
              alt="FARAN" 
              className="h-24 md:h-28 mx-auto"
            />
          </motion.div>
          
          <motion.h1 
            className="text-white mb-8 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-2xl md:text-3xl font-light tracking-wider mt-2 text-white/90">FARAN: The Scent Inherited.</span>
            <span className="block text-xl md:text-2xl font-light tracking-wide mt-3 text-faran-gold">A Legacy in Fragrance</span>
          </motion.h1>
          
          <motion.div 
            className="w-24 h-px mx-auto bg-faran-gold/70 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          ></motion.div>
          
          <motion.p 
            className="text-white/80 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            FARAN is a house of memory. Of mastery. Born from the desert winds and ancient trade routes, FARAN distills rare Agarwood into olfactory heritage. This is not fragrance for the many. This is for those who understand. Those who recognize the honor of scent.
          </motion.p>
          
          <motion.div 
            className={`flex flex-col sm:flex-row justify-center gap-5 sm:gap-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="#collection" className="btn-luxury">
              Shop The Collection
            </a>
            <a href="#about" className="btn-luxury-outline">
              Learn More About FARAN
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating product image */}
      <motion.div 
        className="absolute bottom-20 sm:bottom-40 right-5 sm:right-20 w-40 sm:w-60 md:w-80 opacity-95 hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <img 
          src="/lovable-uploads/03c8d73e-c8cd-426d-a331-5dcf3d592e6d.png"
          alt="FARAN Luxury Oud" 
          className="w-full drop-shadow-2xl"
        />
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png" 
            alt="FARAN Seal" 
            className="w-10 h-10 object-contain"
          />
        </div>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-faran-gold/80 text-sm mb-2 tracking-widest font-light">{isRTL ? 'اسحب' : 'SCROLL'}</span>
        <div className="w-px h-12 bg-gradient-to-b from-faran-gold/80 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
