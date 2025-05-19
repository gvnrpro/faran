
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

// Sample product data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: "royal-oud",
    name: "Royal Oud",
    subtitle: "Signature Collection",
    type: "Perfume Oil",
    price: 1200,
    currency: "AED",
    image: "/lovable-uploads/a7a7fd34-ff28-451e-ad1d-d4ceeb0e9d3b.png",
    description: "Notes of rare Indian agarwood, precious ambergris, and mountain-harvested saffron create a scent worthy of nobility."
  },
  {
    id: "amber-accord",
    name: "Amber Accord",
    subtitle: "Heritage Collection",
    type: "Perfume Oil",
    price: 950,
    currency: "AED",
    image: "/lovable-uploads/a7a7fd34-ff28-451e-ad1d-d4ceeb0e9d3b.png",
    description: "A warm embrace of aged amber, vanilla orchid, and Moroccan cedar that evolves beautifully throughout the day."
  },
  {
    id: "desert-night",
    name: "Desert Night",
    subtitle: "Exclusive Reserve",
    type: "Concentrated Perfume",
    price: 1500,
    currency: "AED",
    image: "/lovable-uploads/a7a7fd34-ff28-451e-ad1d-d4ceeb0e9d3b.png",
    description: "The mystique of the Arabian night captured with notes of midnight jasmine, frankincense, and Cambodian oud."
  },
  {
    id: "sultans-legacy",
    name: "Sultan's Legacy",
    subtitle: "Private Collection",
    type: "Luxury Perfume",
    price: 2200,
    currency: "AED",
    image: "/lovable-uploads/a7a7fd34-ff28-451e-ad1d-d4ceeb0e9d3b.png",
    description: "A majestic blend of the finest aged agarwood, Bulgarian rose, and sandalwood for those who lead."
  }
];

// Sample oud products
const sampleOudProducts = [
  {
    id: "indian-salla",
    name: "Indian Agarwood (Salla)",
    subtitle: "Premium Grade",
    type: "Oud Chips",
    price: 600,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/8412a703-9f82-4b78-b579-4929fb6c743f.png",
    description: "From the misty forests of Northeast India, known for its sweet, deep, and balsamic notes with subtle hints of fruit."
  },
  {
    id: "baby-salla",
    name: "Baby Salla",
    subtitle: "Delicate Variant",
    type: "Oud Chips",
    price: 450,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/8412a703-9f82-4b78-b579-4929fb6c743f.png",
    description: "A more delicate variant of Salla offering a lighter but equally complex aroma, sustainably harvested."
  },
  {
    id: "mouri-agarwood",
    name: "Mouri Agarwood",
    subtitle: "Distinctive Character",
    type: "Oud Chips",
    price: 700,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/8412a703-9f82-4b78-b579-4929fb6c743f.png",
    description: "Presents a distinctive character with rich earthy undertones and a subtle sweetness that evolves over time."
  },
  {
    id: "joura-agarwood",
    name: "Joura Agarwood",
    subtitle: "Rare Collection",
    type: "Oud Chips",
    price: 900,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/8412a703-9f82-4b78-b579-4929fb6c743f.png",
    description: "The rarest of our Indian varieties, offering complex notes of spice, honeyed fruits, and a distinctive vanillic sweetness."
  }
];

const ProductGrid = () => {
  const { isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-24 bg-faran-black">
      <div className="container-custom">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-sm transition-all ${activeFilter === "all" 
              ? "bg-faran-gold text-faran-black" 
              : "border border-faran-gold/30 text-gray-300 hover:border-faran-gold hover:text-white"}`}
          >
            {isRTL ? "كل المنتجات" : "All Products"}
          </button>
          <button 
            onClick={() => setActiveFilter("oud")}
            className={`px-6 py-2 rounded-sm transition-all ${activeFilter === "oud" 
              ? "bg-faran-gold text-faran-black" 
              : "border border-faran-gold/30 text-gray-300 hover:border-faran-gold hover:text-white"}`}
          >
            {isRTL ? "قطع العود" : "Oud Chips"}
          </button>
          <button 
            onClick={() => setActiveFilter("perfume")}
            className={`px-6 py-2 rounded-sm transition-all ${activeFilter === "perfume" 
              ? "bg-faran-gold text-faran-black" 
              : "border border-faran-gold/30 text-gray-300 hover:border-faran-gold hover:text-white"}`}
          >
            {isRTL ? "زيوت العطور" : "Perfume Oils"}
          </button>
        </div>
        
        {/* Oud Chips Section */}
        {(activeFilter === "all" || activeFilter === "oud") && (
          <div id="oud-chips" className="mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                {isRTL ? "قطع العود الفاخرة" : "Premium Oud Chips"}
              </h2>
              <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {isRTL 
                  ? "استكشف مجموعتنا الاستثنائية من قطع العود الأصلية، التي تم تجميعها بعناية من أقدم الغابات وأكثرها تقديراً."
                  : "Explore our exceptional collection of authentic oud chips, carefully curated from the oldest and most revered forests."}
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {sampleOudProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <Link to="/shop/oud-chips" className="btn-luxury-outline px-8 py-3">
                {isRTL ? "عرض المزيد من قطع العود" : "View All Oud Chips"}
              </Link>
            </div>
          </div>
        )}
        
        {/* Perfume Oils Section */}
        {(activeFilter === "all" || activeFilter === "perfume") && (
          <div id="perfume-oils" className="scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                {isRTL ? "عطور فاران الفاخرة" : "FARAN Luxury Perfumes"}
              </h2>
              <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {isRTL 
                  ? "عطور مصممة بدقة من أجود أنواع العود، تحمل توقيع سيدنا وإرثنا العريق في صناعة العطور."
                  : "Meticulously crafted fragrances from the finest oud, bearing the signature of our mastery and rich perfumery heritage."}
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {sampleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <Link to="/shop/perfumes" className="btn-luxury-outline px-8 py-3">
                {isRTL ? "عرض المزيد من العطور" : "View All Perfumes"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
