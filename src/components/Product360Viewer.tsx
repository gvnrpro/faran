
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { RotateCcw, Maximize, Play, Pause } from "lucide-react";

interface Product360ViewerProps {
  images: string[];
  productName: string;
  autoRotate?: boolean;
}

const Product360Viewer = ({ images, productName, autoRotate = false }: Product360ViewerProps) => {
  const { isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAutoRotating && !isDragging) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 150);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoRotating, isDragging, images.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsAutoRotating(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const sensitivity = 5;
    
    if (Math.abs(deltaX) > sensitivity) {
      const direction = deltaX > 0 ? 1 : -1;
      setCurrentIndex((prev) => {
        const newIndex = prev + direction;
        return newIndex < 0 ? images.length - 1 : newIndex % images.length;
      });
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setIsAutoRotating(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 10;
    
    if (Math.abs(deltaX) > sensitivity) {
      const direction = deltaX > 0 ? 1 : -1;
      setCurrentIndex((prev) => {
        const newIndex = prev + direction;
        return newIndex < 0 ? images.length - 1 : newIndex % images.length;
      });
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  const resetRotation = () => {
    setCurrentIndex(0);
    setIsAutoRotating(false);
  };

  if (images.length <= 1) {
    return (
      <div className="aspect-square bg-white rounded-lg overflow-hidden">
        <img 
          src={images[0]} 
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
      {/* 360° Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-faran-gold text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <RotateCcw size={12} />
          <span>360°</span>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={toggleAutoRotate}
          className="p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all"
          title={isAutoRotating ? "Pause rotation" : "Auto rotate"}
        >
          {isAutoRotating ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={resetRotation}
          className="p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all"
          title="Reset rotation"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* 360° Viewer */}
      <div
        ref={containerRef}
        className={`aspect-square relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${productName} - View ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          draggable={false}
        />
        
        {/* Touch instruction overlay for mobile */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden">
          <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm opacity-0 animate-pulse">
            {isRTL ? "اسحب للدوران" : "Swipe to rotate"}
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-faran-gold' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Angle indicator */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
          {Math.round((currentIndex / images.length) * 360)}°
        </div>
      </div>
    </div>
  );
};

export default Product360Viewer;
