
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import { WhatsappIcon } from "lucide-react";

// Define proper interfaces for our product types
interface ProductBase {
  id: string;
  name: string;
  arabicName: string;
  subtitle: string;
  type: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  detailedDescription: string;
  origin: string;
  pricePerGram: boolean;
  scent: {
    top: string;
    middle: string;
    base: string;
  };
  suitableFor?: string[];
  rarity?: string;
}

// Define product type 
type Product = ProductBase;

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
      "joura-triple": {
        id: "joura-triple",
        name: "Joura Triple",
        arabicName: "جورا تريبل",
        subtitle: "Premium Collection",
        type: "Oud Chips",
        price: 900,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
          "/lovable-uploads/538e6910-0ab6-4c27-96c9-3839ea9c4dd0.png"
        ],
        description: "Our rarest triple-distilled Joura Agarwood, offering complex notes of spice, honeyed fruits, and a distinctive vanillic sweetness.",
        detailedDescription: "Joura Triple represents the pinnacle of our collection, a truly rare treasure from the deepest, most ancient parts of the Indian forests. These exceptional chips are characterized by their intense resinous content and remarkable complexity. When heated, they release a captivating bouquet of spice notes, honeyed fruits, and a distinctive vanillic sweetness that connoisseurs around the world cherish and collect.",
        origin: "Ancient Protected Forests, India",
        scent: {
          top: "Spice, Dried Fruits",
          middle: "Honey, Wild Flowers",
          base: "Vanilla, Rich Amber, Aged Woods"
        },
        suitableFor: ["Collectors", "Special Occasions", "Signature Scent"],
        rarity: "Very Rare"
      },
      "saifi-triple": {
        id: "saifi-triple",
        name: "Saifi Triple",
        arabicName: "سيفي تريبل",
        subtitle: "Exclusive Reserve",
        type: "Oud Chips",
        price: 850,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/af52e074-28e0-4c42-815b-a0498fedbf0e.png",
          "/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png"
        ],
        description: "Triple-distilled Saifi Agarwood with a complex profile of sweet florals, deep woods, and subtle spice notes.",
        detailedDescription: "Saifi Triple is created through an exclusive triple-distillation process that elevates the natural complexity of premium Saifi Agarwood. The result is an extraordinary olfactory experience that begins with delicate floral notes before revealing a heart of deep, resinous woods and ending with subtle hints of rare spices. Each piece is carefully selected by our master artisans to ensure exceptional quality.",
        origin: "Selected Forests, Cambodia",
        scent: {
          top: "Sweet Floral, Citrus",
          middle: "Deep Woods, Resinous Amber",
          base: "Subtle Spice, Vanilla, Musk"
        },
        suitableFor: ["Daily Luxury", "Gifting", "Personal Collection"],
        rarity: "Rare"
      },
      "bal-moori": {
        id: "bal-moori",
        name: "Bal Moori",
        arabicName: "بال موري",
        subtitle: "Heritage Collection",
        type: "Oud Chips",
        price: 700,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png",
          "/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png"
        ],
        description: "A balanced Moori Agarwood offering sweet, woody notes with exceptional staying power and complex development.",
        detailedDescription: "Bal Moori is our perfectly balanced Moori Agarwood variant, prized for its harmonious blend of sweetness and depth. Sourced from mature trees in specific microclimates, these chips develop a unique combination of honey-like sweetness with rich woody undertones that evolve beautifully when heated. The exceptional staying power makes this an ideal choice for those who appreciate a long-lasting fragrance experience.",
        origin: "Selected Eastern Forests",
        scent: {
          top: "Sweet Honey, Light Citrus",
          middle: "Rich Woods, Amber",
          base: "Earth, Mild Spice, Resin"
        },
        suitableFor: ["Daily Use", "New Collectors", "Ambiance Creation"],
        rarity: "Uncommon"
      },
      "moori-triple": {
        id: "moori-triple",
        name: "Moori Triple",
        arabicName: "موري تريبل",
        subtitle: "Premium Selection",
        type: "Oud Chips",
        price: 750,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
          "/lovable-uploads/af52e074-28e0-4c42-815b-a0498fedbf0e.png"
        ],
        description: "Triple-distilled Moori Agarwood offering an intensified, complex aroma with remarkable depth and character.",
        detailedDescription: "Moori Triple undergoes our meticulous triple-distillation process to concentrate and enhance its natural aromatic qualities. The result is an extraordinary oud with intensified notes of forest floor, dark fruits, and sweet woods that create a sophisticated olfactory journey. Each carefully selected piece provides a luxurious experience that continues to unfold and surprise over time.",
        origin: "Southern Assam Forests",
        scent: {
          top: "Earth, Dark Fruits",
          middle: "Forest Floor, Dried Herbs",
          base: "Sweet Wood, Complex Resin"
        },
        suitableFor: ["Connoisseurs", "Special Occasions", "Evening Use"],
        rarity: "Rare"
      },
      "barri": {
        id: "barri",
        name: "Barri",
        arabicName: "بري",
        subtitle: "Classic Collection",
        type: "Oud Chips",
        price: 600,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png",
          "/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png"
        ],
        description: "Wild-harvested Barri Agarwood with distinctive earthy character and natural complexity.",
        detailedDescription: "Our Barri Agarwood is sustainably wild-harvested from remote forests, ensuring its authentic character remains intact. These chips offer a distinctive earthy profile with fascinating complexity that includes notes of wild herbs, forest undertones, and subtle natural sweetness. Barri is particularly appreciated by those who value natural, unaltered oud experiences.",
        origin: "Wild Forests, Southeast Asia",
        scent: {
          top: "Wild Herbs, Green Notes",
          middle: "Earth, Wood, Light Smoke",
          base: "Natural Sweet Resin, Moss"
        },
        suitableFor: ["Nature Enthusiasts", "Authentic Experience Seekers", "Daily Use"],
        rarity: "Standard Premium"
      },
      "double-face": {
        id: "double-face",
        name: "Double Face",
        arabicName: "دبل فيس",
        subtitle: "Artisan Collection",
        type: "Oud Chips",
        price: 800,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/af52e074-28e0-4c42-815b-a0498fedbf0e.png",
          "/lovable-uploads/538e6910-0ab6-4c27-96c9-3839ea9c4dd0.png"
        ],
        description: "Uniquely dual-character oud that transforms remarkably from initial burn to settled aroma.",
        detailedDescription: "Double Face is named for its fascinating dual character that evolves dramatically over time. The initial burn reveals bright, vibrant notes of exotic fruits and sweet florals, which gradually transform into a completely different profile of deep woods, rich amber, and subtle leather tones. This remarkable transformation makes Double Face a favorite among collectors who appreciate complexity and evolution in their oud experience.",
        origin: "Private Reserve Forests",
        scent: {
          top: "Exotic Fruits, Sweet Floral",
          middle: "Transformative Phase, Amber",
          base: "Deep Woods, Leather, Resin"
        },
        suitableFor: ["Collectors", "Experience Seekers", "Special Occasions"],
        rarity: "Rare"
      },
      "malaki": {
        id: "malaki",
        name: "Malaki",
        arabicName: "ملكي",
        subtitle: "Royal Collection",
        type: "Oud Chips",
        price: 950,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
          "/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png"
        ],
        description: "Our royal grade agarwood with majestic character, deep complexity, and noble presence.",
        detailedDescription: "Malaki, meaning 'royal' in Arabic, lives up to its name with truly majestic character and presence. Selected only from the most exceptional sources, these premium chips offer extraordinary depth with layers of precious woods, rich amber, exotic spices, and subtle hints of rare flowers. Reserved for those who demand nothing but the finest, Malaki creates an atmosphere of true luxury and sophistication.",
        origin: "Ancient Protected Forests",
        scent: {
          top: "Precious Woods, Light Spice",
          middle: "Rich Amber, Subtle Flowers",
          base: "Deep Resin, Honey, Musk"
        },
        suitableFor: ["VIP Gifting", "Royal Occasions", "Signature Environments"],
        rarity: "Very Rare"
      },
      "joura-super": {
        id: "joura-super",
        name: "Joura Super",
        arabicName: "جورا سوبر",
        subtitle: "Ultra Premium",
        type: "Oud Chips",
        price: 1200,
        pricePerGram: true,
        currency: "AED",
        images: [
          "/lovable-uploads/538e6910-0ab6-4c27-96c9-3839ea9c4dd0.png",
          "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png"
        ],
        description: "The ultimate expression of Joura Agarwood, offering unparalleled complexity, rarity, and prestige.",
        detailedDescription: "Joura Super represents the absolute pinnacle of our collection. These extraordinarily rare chips come from the oldest, most precious sources of agarwood, selected through a rigorous process that accepts only the finest 1% of all harvested material. The result is an oud of spectacular depth and complexity, with layer upon layer of precious aromatics that unfold over hours. Joura Super is not merely a fragrance; it is a statement of ultimate luxury and connoisseurship.",
        origin: "Oldest Protected Ancient Forests, India",
        scent: {
          top: "Rare Spices, Dried Exotic Fruits",
          middle: "Precious Woods, Wild Honey, Ancient Resin",
          base: "Complex Vanilla, Aged Amber, Noble Musk"
        },
        suitableFor: ["Elite Collectors", "Museum-Grade Collections", "Once-in-a-Lifetime Occasions"],
        rarity: "Exceptionally Rare"
      }
    };
    
    // First check if it's an oud product
    if (productId && oudProducts[productId as keyof typeof oudProducts]) {
      return oudProducts[productId as keyof typeof oudProducts];
    }
    // Default fallback product if ID doesn't match
    else {
      return oudProducts["joura-triple"];
    }
  };
  
  const product = getProductData();

  // Generate WhatsApp message for the product
  const generateWhatsAppMessage = (product: Product) => {
    return encodeURIComponent(
      `Hello, I'm interested in purchasing ${product.name} (${product.arabicName}) from FARAN. Please provide more information about availability and delivery options.`
    );
  };

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
          title={`${product.name} | ${product.arabicName} | FARAN`}
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
                <h1 className="text-3xl md:text-4xl font-serif mb-1">
                  {isRTL ? product.arabicName : product.name}
                </h1>
                <h2 className="text-xl text-gray-300 mb-4">
                  {isRTL ? product.name : product.arabicName}
                </h2>
                
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
                    {product.rarity && (
                      <li>
                        <span className="text-faran-gold/70">{isRTL ? "الندرة:" : "Rarity:"}</span> {product.rarity}
                      </li>
                    )}
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

                {product.suitableFor && (
                  <div className="mb-8">
                    <h3 className="text-lg font-serif mb-3">{isRTL ? "مناسب لـ" : "Perfect For"}</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.suitableFor.map((use, index) => (
                        <span key={index} className="bg-faran-black/50 border border-faran-gold/30 px-3 py-1 text-sm rounded-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-8 space-y-4">
                  <a 
                    href={`https://wa.me/971XXXXXXXX?text=${generateWhatsAppMessage(product)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-luxury w-full py-4 flex items-center justify-center gap-2"
                  >
                    <WhatsappIcon size={18} />
                    {isRTL ? "اطلب عبر واتساب" : "Order via WhatsApp"}
                  </a>
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
