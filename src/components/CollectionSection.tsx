
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  subtitle: string;
  family: string;
  description: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, subtitle, family, description, index }) => {
  const { isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group relative luxury-card product-card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div className="aspect-[3/4] bg-faran-beige/5 relative">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-faran-black/95 via-faran-black/50 to-transparent flex items-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-white/90 text-sm mb-3 leading-relaxed">{description}</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-faran-gold"></div>
                <p className="text-faran-gold text-xs uppercase tracking-wider">{family}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={`p-4 flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
        <span className="text-xs uppercase tracking-wider text-faran-gold/70">{family}</span>
        <h3 className="text-lg font-medium mt-1 text-white">{name}</h3>
        <p className="text-white/60 text-sm mt-1">{subtitle}</p>
      </div>
      
      {/* Luxury corner elements */}
      <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-5 h-5 opacity-70`}>
        <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-[1px] h-3 bg-faran-gold`}></div>
        <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-3 h-[1px] bg-faran-gold`}></div>
      </div>
      <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-5 h-5 opacity-70`}>
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-[1px] h-3 bg-faran-gold`}></div>
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-3 h-[1px] bg-faran-gold`}></div>
      </div>
    </motion.div>
  );
};

const CollectionSection = () => {
  const { t, isRTL } = useLanguage();

  const products = [
    {
      image: "/lovable-uploads/ef1216b3-e509-41f3-8884-c3f9c175e42f.png",
      name: t("collection.royal.title"),
      subtitle: t("collection.royal.subtitle"),
      family: t("collection.royal.type"),
      description: t("collection.royal.description")
    },
    {
      image: "/lovable-uploads/e4f20b74-720a-4f3f-bec5-558fbe7b0faf.png",
      name: t("collection.amber.title"),
      subtitle: t("collection.amber.subtitle"),
      family: t("collection.amber.type"),
      description: t("collection.amber.description")
    },
    {
      image: "/lovable-uploads/8412a703-9f82-4b78-b579-4929fb6c743f.png",
      name: t("collection.desert.title"),
      subtitle: t("collection.desert.subtitle"),
      family: t("collection.desert.type"),
      description: t("collection.desert.description")
    },
    {
      image: "/lovable-uploads/5568ba0b-ca71-40eb-93a4-2d4afbf85fff.png",
      name: t("collection.sultan.title"),
      subtitle: t("collection.sultan.subtitle"),
      family: t("collection.sultan.type"),
      description: t("collection.sultan.description")
    }
  ];

  return (
    <section id="collection" className={`section bg-gradient-to-b from-faran-brown to-faran-black ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-faran-gold mb-3 font-light tracking-wide">
            {t("collection.title")}
          </h2>
          <div className="w-20 h-px mx-auto bg-faran-gold/40 mb-5"></div>
          <p className="text-white/80 max-w-2xl mx-auto font-light">
            {t("collection.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#" className="btn-luxury-outline">
            {t("collection.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;
