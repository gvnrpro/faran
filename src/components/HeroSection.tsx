
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronDown, Star } from "lucide-react";

const HeroSection = () => {
  const { t, isRTL, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  
  const heroSlides = [
    {
      id: "joura-super",
      name: "Joura Super",
      arabicName: "جورا سوبر",
      subtitle: "Heirloom Excellence",
      image: "/lovable-uploads/538e6910-0ab6-4c27-96c9-3839ea9c4dd0.png",
      description: "A presence that commands respect, distilled from the rarest Assamese oud—this is legacy in liquid form."
    },
    {
      id: "malaki",
      name: "Malaki",
      arabicName: "ملكي",
      subtitle: "Royal Signature",
      image: "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
      description: "The scent of nobility flows through generations. Malaki is honor made manifest."
    },
    {
      id: "joura-triple",
      name: "Joura Triple",
      arabicName: "جورا تريبل",
      subtitle: "Master's Choice",
      image: "/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png",
      description: "Three distillations, one soul. The patience of our forefathers meets the excellence of today."
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative pt-32 pb-20 md:min-h-screen flex items-center bg-desert-gradient overflow-hidden">
      {/* Decorative Arabian geometric patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-faran-brass rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-faran-gold rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-faran-brass/10 rotate-45"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Brand Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center lg:text-left"
          >
            {/* Arabic calligraphy-inspired brand mark */}
            <div className="mb-8">
              <div className="text-faran-brass text-sm uppercase tracking-widest mb-2">
                {isRTL ? "دار فاران للعود" : "DAR FARAN"}
              </div>
              <h1 className="font-serif text-faran-night mb-4">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-light">
                  {isRTL ? "فاران" : "FARAN"}
                </span>
                <span className="block text-xl md:text-2xl mt-2 text-faran-charcoal font-light">
                  {isRTL ? "إرث العطور الأصيلة" : "A Legacy Written in Scent"}
                </span>
              </h1>
            </div>
            
            <div className="w-32 h-px bg-brass-gradient mx-auto lg:mx-0 mb-8"></div>
            
            <p className="text-faran-charcoal text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
              {isRTL 
                ? "منذ أجيال، نحمل وعداً مقدساً: أن نحافظ على تراث العطور العربية الأصيلة. فاران ليس مجرد عطر، بل روح تتوارثها الأجيال وذكرى تحملها القلوب."
                : "For generations, we have carried a sacred promise: to preserve the authentic heritage of Arabian perfumery. FARAN is not merely a fragrance—it is a soul passed down through generations, a memory carried in the heart."}
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-6 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link 
                to={`/${language}/shop`} 
                className="bg-faran-brass hover:bg-faran-gold text-faran-sandstone px-8 py-4 uppercase tracking-wider text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isRTL ? "اكتشف الإرث" : "Discover Our Legacy"}
              </Link>
              <a 
                href="https://wa.me/971557993441" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-faran-brass text-faran-night hover:bg-faran-brass hover:text-faran-sandstone px-8 py-4 flex items-center justify-center gap-3 uppercase tracking-wider text-sm font-medium transition-all duration-300"
              >
                <MessageCircle size={18} />
                {isRTL ? "تحدث معنا" : "Begin Conversation"}
              </a>
            </div>
          </motion.div>
          
          {/* Right carousel - Heritage Showcase */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-radial-gradient from-faran-gold/20 via-transparent to-transparent rounded-full blur-3xl"></div>
            
            {heroSlides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ 
                  opacity: activeSlide === index ? 1 : 0,
                  scale: activeSlide === index ? 1 : 0.9,
                  rotateY: activeSlide === index ? 0 : 10,
                  zIndex: activeSlide === index ? 10 : 0
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center"
              >
                <div className="relative w-full max-w-[350px] aspect-[3/4] mb-8">
                  {/* Elegant frame effect */}
                  <div className="absolute -inset-4 bg-brass-gradient opacity-20 blur-lg rounded-lg"></div>
                  <div className="relative bg-faran-sandstone p-4 shadow-2xl">
                    <img 
                      src={slide.image} 
                      alt={slide.name}
                      className="object-contain h-full w-full"
                    />
                    {/* Heritage badge */}
                    <div className="absolute top-2 right-2 bg-faran-brass text-faran-sandstone p-2 rounded-full">
                      <Star size={16} fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center max-w-md">
                  <div className="text-faran-brass text-sm uppercase tracking-widest mb-2">
                    {slide.subtitle}
                  </div>
                  <h3 className="text-3xl font-serif text-faran-night mb-4">
                    {isRTL ? slide.arabicName : slide.name}
                  </h3>
                  <p className="text-faran-charcoal leading-relaxed mb-6 italic">
                    {slide.description}
                  </p>
                  <Link 
                    to={`/${language}/product/${slide.id}`}
                    className="inline-block text-faran-brass hover:text-faran-gold border-b border-faran-brass/30 hover:border-faran-gold transition-all duration-300 pb-1"
                  >
                    {isRTL ? "اكتشف القصة" : "Discover the Story"}
                  </Link>
                </div>
              </motion.div>
            ))}
            
            {/* Elegant carousel indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    activeSlide === index 
                      ? 'bg-faran-brass w-8 shadow-lg' 
                      : 'bg-faran-brass/30 hover:bg-faran-brass/50'
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`View ${heroSlides[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator with Arabian flair */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-px h-8 bg-brass-gradient mb-2"></div>
          <ChevronDown size={20} className="text-faran-brass" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
