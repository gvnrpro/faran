
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import LuxuryExperience from "@/components/LuxuryExperience";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

const Index = () => {
  const { language, isRTL } = useLanguage();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FARAN",
    "url": "https://faran.ae",
    "logo": "/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png",
    "description": "Premium luxury oud and fragrances with a rich Arabian heritage.",
    "sameAs": [
      "https://www.instagram.com/faran",
      "https://www.facebook.com/faran"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://faran.ae/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "highPrice": "5000",
      "lowPrice": "500",
      "offerCount": "8"
    }
  };

  useEffect(() => {
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
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
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
        className={`bg-faran-cream text-faran-brown min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <SEO 
          ogImage="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png"
        >
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </SEO>
        
        <Navbar />
        <HeroSection />
        <FeaturedProducts />
        <LuxuryExperience />
        <TestimonialsSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
