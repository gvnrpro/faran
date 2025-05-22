import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  price: number;
  pricePerGram?: boolean;
  currency: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isRTL } = useLanguage();
  
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
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden gold-border aspect-[3/4]">
          <div className="gold-border-content">
            {/* Product image */}
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-faran-black/90"></div>
              
              {/* Product type badge */}
              <div className="absolute top-4 left-4 bg-faran-gold/90 text-faran-black px-3 py-1 text-xs font-medium">
                {product.type}
              </div>
              
              {/* Product info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="opacity-80 text-faran-gold text-xs mb-1">
                  {product.subtitle}
                </div>
                <h3 className="text-lg font-serif mb-2 group-hover:text-faran-gold transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline justify-between">
                  <p className="text-sm text-white/80">
                    {product.pricePerGram ? (
                      <>
                        <span className="text-faran-gold font-medium">{product.currency} {product.price}</span>
                        <span className="text-xs opacity-70"> / gram</span>
                      </>
                    ) : (
                      <span className="text-faran-gold font-medium">{product.currency} {product.price}</span>
                    )}
                  </p>
                  <span className="text-xs uppercase tracking-wider text-faran-gold/70">
                    {isRTL ? "عرض المنتج" : "View Product"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
