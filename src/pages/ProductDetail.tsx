import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

// Define proper interfaces for our product types
interface ProductBase {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  detailedDescription: string;
  origin: string;
  scent: {
    top: string;
    middle: string;
    base: string;
  };
}

// Extend the base interface for products with optional pricePerGram
interface Product extends ProductBase {
  pricePerGram?: boolean;
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, isRTL } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    // Set RTL/LTR for the whole page
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup
    };
  }, [language, isRTL]);

  // In a real app, you would fetch the product data based on productId
  // For now, we're using sample data that includes our new images
  const getProductData = () => {
    // Product types available
    const oudProducts = {
      "indian-salla": {
        id: "indian-salla",
        name: "Indian Agarwood (Salla)",
        subtitle: "Premium Grade",
        type: "Oud Chips",
        price: 600,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/af52e074-28e0-4c42-815b-a0498fedbf0e.png",
          "/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png"
        ],
        description: "From the misty forests of Northeast India, known for its sweet, deep, and balsamic notes with subtle hints of fruit.",
        detailedDescription: "Our Indian Agarwood, locally known as 'Salla', is harvested sustainably from the ancient forests of Assam. These chips represent the pinnacle of oud quality, showcasing a remarkable depth of character that only decades of natural formation can create. The complex aroma profile transitions from sweet, balsamic opening notes to a rich, woody heart with subtle undertones of vanilla and honey.",
        origin: "Assam, Northeast India",
        scent: {
          top: "Sweet, Fruity, Balsamic",
          middle: "Woody, Amber, Honey",
          base: "Vanilla, Earth, Musk"
        }
      },
      "baby-salla": {
        id: "baby-salla",
        name: "Baby Salla",
        subtitle: "Delicate Variant",
        type: "Oud Chips",
        price: 450,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png",
          "/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png"
        ],
        description: "A more delicate variant of Salla offering a lighter but equally complex aroma, sustainably harvested.",
        detailedDescription: "Baby Salla represents younger agarwood that offers a more delicate, yet intriguingly complex fragrance profile. These chips are carefully selected for their quality and uniqueness, providing a lighter alternative that's perfect for those new to oud appreciation or those who prefer more subtle aromatic experiences.",
        origin: "Assam, Northeast India",
        scent: {
          top: "Light Floral, Honey",
          middle: "Sweet Wood, Green Notes",
          base: "Subtle Amber, Light Musk"
        }
      },
      "mouri-agarwood": {
        id: "mouri-agarwood",
        name: "Mouri Agarwood",
        subtitle: "Distinctive Character",
        type: "Oud Chips",
        price: 700,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png",
          "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png"
        ],
        description: "Presents a distinctive character with rich earthy undertones and a subtle sweetness that evolves over time.",
        detailedDescription: "Mouri Agarwood is celebrated for its distinctive character and rich aromatic profile. Sourced from mature trees in specific microclimates, these chips develop a unique combination of earthy undertones with surprising sweet facets that continue to evolve during burning. Our expert harvesters select only the finest pieces, ensuring each gram delivers an unforgettable olfactory journey.",
        origin: "Southern Assam Forests",
        scent: {
          top: "Earth, Dark Fruits",
          middle: "Forest Floor, Dried Herbs",
          base: "Sweet Wood, Complex Resin"
        }
      },
      "joura-agarwood": {
        id: "joura-agarwood",
        name: "Joura Agarwood",
        subtitle: "Rare Collection",
        type: "Oud Chips",
        price: 900,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
          "/lovable-uploads/538e6910-0ab6-4c27-96c9-3839ea9c4dd0.png"
        ],
        description: "The rarest of our Indian varieties, offering complex notes of spice, honeyed fruits, and a distinctive vanillic sweetness.",
        detailedDescription: "Joura Agarwood represents the pinnacle of our collection, a truly rare treasure from the deepest, most ancient parts of the Indian forests. These exceptional chips are characterized by their intense resinous content and remarkable complexity. When heated, they release a captivating bouquet of spice notes, honeyed fruits, and a distinctive vanillic sweetness that connoisseurs around the world cherish and collect.",
        origin: "Ancient Protected Forests, India",
        scent: {
          top: "Spice, Dried Fruits",
          middle: "Honey, Wild Flowers",
          base: "Vanilla, Rich Amber, Aged Woods"
        }
      }
    };
    
    const perfumeProducts = {
      "royal-oud": {
        id: "royal-oud",
        name: "Royal Oud",
        subtitle: "Signature Collection",
        type: "Perfume Oil",
        price: 1200,
        currency: "AED",
        images: [
          "/lovable-uploads/423a1394-6e8b-4d7a-b064-cd8cd512bb8d.png",
          "/lovable-uploads/bb67914c-f910-45dd-b446-aeed9a69a0fd.png"
        ],
        description: "Notes of rare Indian agarwood, precious ambergris, and mountain-harvested saffron create a scent worthy of nobility.",
        detailedDescription: "Royal Oud is the crown jewel of our Signature Collection, blending the finest Indian agarwood with precious ambergris and mountain-harvested saffron. This opulent fragrance opens with bright citrus notes that give way to a heart of rich oud and delicate rose. The base notes of ambergris, musk, and sandalwood create a long-lasting sillage that makes a powerful yet refined statement.",
        origin: "United Arab Emirates",
        scent: {
          top: "Citrus, Bergamot",
          middle: "Agarwood, Rose",
          base: "Ambergris, Musk, Sandalwood"
        }
      },
      "amber-accord": {
        id: "amber-accord",
        name: "Amber Accord",
        subtitle: "Heritage Collection",
        type: "Perfume Oil",
        price: 950,
        currency: "AED",
        images: [
          "/lovable-uploads/bb67914c-f910-45dd-b446-aeed9a69a0fd.png",
          "/lovable-uploads/e0bc621b-a964-4e70-9b24-c74ab6810dae.png"
        ],
        description: "A warm embrace of aged amber, vanilla orchid, and Moroccan cedar that evolves beautifully throughout the day.",
        detailedDescription: "Amber Accord is a celebration of warmth and luxury, created for those who appreciate the subtle evolution of a fine fragrance throughout the day. Opening with a gentle blend of bergamot and cardamom, it transitions to a heart of vanilla orchid and jasmine absolute. The base of aged amber, Moroccan cedar, and creamy sandalwood creates a comforting aura that feels both timeless and modern.",
        origin: "United Arab Emirates",
        scent: {
          top: "Bergamot, Cardamom",
          middle: "Vanilla Orchid, Jasmine Absolute",
          base: "Aged Amber, Moroccan Cedar, Sandalwood"
        }
      }
    };
    
    // First check if it's an oud product
    if (productId && oudProducts[productId as keyof typeof oudProducts]) {
      return oudProducts[productId as keyof typeof oudProducts];
    }
    // Then check if it's a perfume product
    else if (productId && perfumeProducts[productId as keyof typeof perfumeProducts]) {
      return perfumeProducts[productId as keyof typeof perfumeProducts];
    }
    // Default fallback product if ID doesn't match
    else {
      return oudProducts["indian-salla"];
    }
  };
  
  const product = getProductData();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images[0],
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "FARAN"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": product.currency,
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-faran-black text-white min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <SEO 
          title={`${product.name} | FARAN`}
          description={product.description}
          ogImage={product.images[0]}
        >
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </SEO>
        
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-square gold-border">
                  <div className="gold-border-content">
                    <img 
                      src={product.images[selectedImageIndex]} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`aspect-square cursor-pointer transition-all ${
                        selectedImageIndex === index 
                          ? 'border-2 border-faran-gold' 
                          : 'border border-faran-gold/30 hover:border-faran-gold/60'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - view ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Product info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-faran-gold mb-2">{product.subtitle}</div>
                <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
                
                <div className="w-16 h-[1px] bg-faran-gold mb-6"></div>
                
                <div className="text-2xl font-light mb-6">
                  {product.pricePerGram ? (
                    <>
                      {product.currency} {product.price} <span className="text-base opacity-70">/ gram</span>
                    </>
                  ) : (
                    <>
                      {product.currency} {product.price}
                    </>
                  )}
                </div>
                
                <p className="text-gray-300 mb-8">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-serif mb-3">{isRTL ? "تفاصيل المنتج" : "Product Details"}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <span className="text-faran-gold/70">{isRTL ? "النوع:" : "Type:"}</span> {product.type}
                    </li>
                    <li>
                      <span className="text-faran-gold/70">{isRTL ? "المصدر:" : "Origin:"}</span> {product.origin}
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-serif mb-3">{isRTL ? "مكونات العطر" : "Scent Profile"}</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><span className="text-faran-gold/70">{isRTL ? "النوتة العليا:" : "Top Notes:"}</span> {product.scent.top}</p>
                    <p><span className="text-faran-gold/70">{isRTL ? "النوتة الوسطى:" : "Heart Notes:"}</span> {product.scent.middle}</p>
                    <p><span className="text-faran-gold/70">{isRTL ? "النوتة الأساسية:" : "Base Notes:"}</span> {product.scent.base}</p>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <button className="btn-luxury w-full py-4">
                    {isRTL ? "أضف إلى السلة" : "Add to Cart"}
                  </button>
                  
                  <button className="btn-luxury-outline w-full py-4">
                    {isRTL ? "أضف إلى المفضلة" : "Add to Wishlist"}
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Additional product information */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">
                  {isRTL ? "وصف مفصل" : "Detailed Description"}
                </h2>
                <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.detailedDescription}
                </p>
                
                {/* Testimonials */}
                <div className="mt-16 bg-black/30 border border-faran-gold/10 p-8 rounded-sm">
                  <h3 className="text-xl font-serif mb-4 text-faran-gold">{isRTL ? "تقييم الخبراء" : "Expert Review"}</h3>
                  <blockquote className="text-gray-300 italic">
                    "This {product.type.toLowerCase()} represents the pinnacle of quality in its category. Our master oud experts have personally selected each piece to ensure authenticity and excellence. The complexity and depth of character make this a true collector's item."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-faran-gold/30 flex items-center justify-center text-faran-gold">
                      F
                    </div>
                    <div className="ml-3">
                      <p className="text-faran-gold">FARAN Master Curator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
        
        {/* Luxury corner elements */}
        <div className="fixed top-0 left-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1px] h-12 bg-gradient-to-b from-faran-gold/80 to-transparent"></div>
          <div className="absolute top-0 left-0 h-[1px] w-12 bg-gradient-to-r from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed top-0 right-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-faran-gold/80 to-transparent"></div>
          <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed bottom-0 left-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[1px] h-12 bg-gradient-to-t from-faran-gold/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-[1px] w-12 bg-gradient-to-r from-faran-gold/80 to-transparent"></div>
        </div>
        <div className="fixed bottom-0 right-0 w-12 h-12 z-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-gradient-to-t from-faran-gold/80 to-transparent"></div>
          <div className="absolute bottom-0 right-0 h-[1px] w-12 bg-gradient-to-l from-faran-gold/80 to-transparent"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetail;
