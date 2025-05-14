
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

const Index = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    // Set page title
    document.title = "FARAN | Luxury Oud & Fragrances";
    
    // Set RTL/LTR for the whole page
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    
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
    <div className={`bg-faran-black text-white min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
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
    </div>
  );
};

export default Index;
