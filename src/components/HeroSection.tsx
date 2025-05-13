
import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-faran-black/90 via-faran-black/70 to-faran-black/90"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center mx-auto px-4">
        <div className="fade-in-up">
          <h1 className="text-white mb-6 font-serif">
            <span className="block text-faran-gold mb-3">FARAN</span>
            <span className="block text-xl md:text-2xl font-light tracking-wider">The Scent of Ancestry</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            A scent passed down through generations. Welcome to FARAN.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="#collection" className="btn btn-primary">
              Explore FARAN
            </a>
            <a href="#craftsmanship" className="btn btn-secondary">
              Discover Oud
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
