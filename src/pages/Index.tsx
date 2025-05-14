
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import LegacySection from "@/components/LegacySection";
import GiftingSection from "@/components/GiftingSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    // Set page title
    document.title = "FARAN | Luxury Oud & Fragrances";
    
    // Set RTL/LTR for the whole page
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Account for fixed header
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, [language, isRTL]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-faran-black text-white min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <LegacySection />
        <GiftingSection />
        <CraftsmanshipSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
        
        {/* Luxury corner elements */}
        <div className="fixed top-0 left-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1px] h-12 bg-gradient-to-b from-faran-gold/80 to-transparent"></div>
          <div className="absolute top-0 left-0 h-[1px] w-12 bg-gradient-to-r from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed top-0 right-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-faran-gold/80 to-transparent"></div>
          <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed bottom-0 left-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[1px] h-12 bg-gradient-to-t from-faran-gold/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-[1px] w-12 bg-gradient-to-r from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed bottom-0 right-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-gradient-to-t from-faran-gold/80 to-transparent"></div>
          <div className="absolute bottom-0 right-0 h-[1px] w-12 bg-gradient-to-l from-faran-gold/80 to-transparent"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
