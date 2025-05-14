
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  image: string;
  name: string;
  subtitle: string;
  family: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, subtitle, family, description }) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="group relative hover-shine">
      <div className="overflow-hidden">
        <div className="aspect-[3/4] bg-faran-beige/10 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-faran-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-white text-sm mb-2">{description}</p>
              <p className="text-faran-gold text-xs">{family}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-4 flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
        <span className="text-xs uppercase tracking-wider text-faran-gold">{family}</span>
        <h3 className="text-lg font-medium mt-1">{name}</h3>
        <p className="text-white/70 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
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
        <div className="text-center mb-16">
          <h2 className="text-faran-gold mb-3">{t("collection.title")}</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t("collection.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {products.map((product, index) => (
            <div className="transform transition-transform duration-700 hover:-translate-y-2" 
                 style={{ animationDelay: `${index * 0.2}s` }}
                 key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn btn-secondary">
            {t("collection.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
