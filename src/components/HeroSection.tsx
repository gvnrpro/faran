
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { t, isRTL, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  
  const heroSlides = [
    {
      id: "joura-super",
      name: "Joura Super",
      arabicName: "جورا سوبر",
      subtitle: "Ultra Premium",
      image: "/lovable-uploads/538e6910-0ab6-4c27-96c9-3839ea9c4dd0.png",
      description: "The pinnacle of oud excellence, offering unparalleled complexity and character."
    },
    {
      id: "malaki",
      name: "Malaki",
      arabicName: "ملكي",
      subtitle: "Royal Collection",
      image: "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
      description: "A majestic fragrance with deep complexity and noble presence."
    },
    {
      id: "joura-triple",
      name: "Joura Triple",
      arabicName: "جورا تريبل",
      subtitle: "Premium Collection",
      image: "/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png",
      description: "Triple-distilled for complexity, offering notes of spice and honeyed fruits."
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section 
      className="relative pt-32 pb-20 md:min-h-screen flex items-center bg-faran-cream overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)"
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-faran-gold to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-faran-gold to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-serif mb-6">
              <span className="text-faran-gold block text-xl md:text-2xl mb-2">FARAN</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-faran-brown">
                {isRTL ? "عطور استثنائية" : "Exceptional Fragrances"}
              </span>
              <span className="block text-xl md:text-2xl mt-3 text-faran-brown/80 font-light">
                {isRTL ? "إرث في العطور" : "A Legacy in Fragrance"}
              </span>
            </h1>
            
            <div className="w-24 h-px mx-auto lg:mx-0 bg-faran-gold/70 mb-8"></div>
            
            <p className="text-faran-brown/80 max-w-xl mx-auto lg:mx-0 mb-10">
              {isRTL 
                ? "ليست مجرد عطور، بل إرث من الأناقة والتميز. تجسد فاران روح الفخامة في عالم العطور، بتركيبات فريدة من أجود أنواع العود."
                : "More than fragrance—it's inherited elegance. FARAN embodies luxury in olfactory form, with unique compositions crafted from the finest oud."}
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-5 sm:gap-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link to={`/${language}/shop`} className="btn-luxury">
                {isRTL ? "اكتشف المجموعة" : "Explore Collection"}
              </Link>
              <a 
                href="https://wa.me/971557993441" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-luxury-outline flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                {isRTL ? "تواصل معنا" : "Contact Us"}
              </a>
            </div>
          </motion.div>
          
          {/* Right carousel */}
          <div className="relative h-[500px] flex items-center justify-center">
            {heroSlides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: activeSlide === index ? 1 : 0,
                  scale: activeSlide === index ? 1 : 0.9,
                  zIndex: activeSlide === index ? 10 : 0
                }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center"
              >
                <div className="relative w-full max-w-[300px] aspect-[3/4]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-faran-softGold/30 to-transparent rounded-full blur-2xl -z-10 opacity-70"></div>
                  <img 
                    src={slide.image} 
                    alt={slide.name}
                    className="object-contain h-full w-full"
                  />
                </div>
                
                <div className="text-center mt-8">
                  <div className="text-faran-gold text-sm">{slide.subtitle}</div>
                  <h3 className="text-2xl font-serif mt-1 text-faran-brown">
                    {isRTL ? slide.arabicName : slide.name}
                  </h3>
                  <p className="text-faran-brown/70 max-w-xs mx-auto mt-2">{slide.description}</p>
                  <Link 
                    to={`/${language}/product/${slide.id}`}
                    className="inline-block mt-4 text-faran-gold hover:text-faran-darkGold border-b border-faran-gold/30 hover:border-faran-gold transition-colors"
                  >
                    {isRTL ? "اكتشف المزيد" : "Discover More"}
                  </Link>
                </div>
              </motion.div>
            ))}
            
            {/* Carousel indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeSlide === index ? 'bg-faran-gold w-6' : 'bg-faran-gold/30'
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <ChevronDown size={24} className="text-faran-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
