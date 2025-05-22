
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  arabicName?: string;
  subtitle: string;
  type: string;
  price: number;
  pricePerGram?: boolean;
  currency: string;
  image: string;
  description: string;
  suitableFor?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isRTL, language } = useLanguage();
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="group"
    >
      <Link to={`/${language}/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
          {/* Product image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Subtle gold overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-faran-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Product type badge */}
            <div className="absolute top-4 left-4 bg-white text-faran-brown px-3 py-1 text-xs font-medium shadow-sm">
              {product.type}
            </div>
          </div>
          
          {/* Product info */}
          <div className="p-4 border-t border-faran-gold/10">
            <div className="text-faran-gold text-xs mb-1">
              {product.subtitle}
            </div>
            <h3 className="text-lg font-serif mb-1 text-faran-brown group-hover:text-faran-gold transition-colors">
              {isRTL && product.arabicName ? product.arabicName : product.name}
            </h3>
            {isRTL && product.arabicName ? (
              <div className="text-xs text-faran-brown/60 mb-2">{product.name}</div>
            ) : product.arabicName ? (
              <div className="text-xs text-faran-brown/60 mb-2">{product.arabicName}</div>
            ) : null}
            <div className="flex items-baseline justify-between mt-2">
              <p className="text-sm text-faran-brown">
                {product.pricePerGram ? (
                  <>
                    <span className="text-faran-gold font-medium">{product.currency} {product.price}</span>
                    <span className="text-xs opacity-70"> / gram</span>
                  </>
                ) : (
                  <span className="text-faran-gold font-medium">{product.currency} {product.price}</span>
                )}
              </p>
              <span className="text-xs uppercase tracking-wider text-faran-gold/70 group-hover:text-faran-gold transition-colors">
                {isRTL ? "عرض المنتج" : "View Product"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
