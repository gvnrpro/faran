
import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LegacySection from "@/components/LegacySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

const Index = () => {
  const { language, isRTL } = useLanguage();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FARAN - Dar FARAN",
    "url": "https://faran.ae", 
    "logo": "/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png",
    "description": "Authentic Arabian luxury oud and fragrances. A family legacy of perfumery excellence rooted in heritage, honor, and hospitality.",
    "sameAs": [
      "https://www.instagram.com/faran",
      "https://www.facebook.com/faran"
    ],
    "founders": {
      "@type": "Person",
      "name": "FARAN Family Heritage"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Premium Arabian Oud Fragrances",
        "category": "Luxury Perfumes"
      }
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
        className={`bg-faran-sandstone text-faran-charcoal min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <SEO 
          title="FARAN | Authentic Arabian Luxury Oud & Heritage Fragrances"
          description="Discover FARAN's authentic Arabian luxury oud collection. A family legacy rooted in heritage, honor, and hospitality. Premium fragrances that tell your story."
          keywords="FARAN, luxury oud, Arabian perfumes, authentic heritage, premium fragrances, Dubai oud, traditional perfumery"
          ogImage="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png"
        >
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </SEO>
        
        <Navbar />
        <HeroSection />
        <LegacySection />
        <FeaturedProducts />
        <TestimonialsSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
