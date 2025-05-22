
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle } from "lucide-react";

// Product data for the 8 requested products
const oudProducts = [
  {
    id: "joura-triple",
    name: "Joura Triple",
    arabicName: "جورا تريبل",
    subtitle: "Premium Collection",
    type: "Oud Chips",
    price: 900,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
    description: "Our rarest triple-distilled Joura Agarwood, offering complex notes of spice, honeyed fruits, and a distinctive vanillic sweetness.",
    suitableFor: ["Collectors", "Special Occasions"]
  },
  {
    id: "saifi-triple",
    name: "Saifi Triple",
    arabicName: "سيفي تريبل",
    subtitle: "Exclusive Reserve",
    type: "Oud Chips",
    price: 850,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/af52e074-28e0-4c42-815b-a0498fedbf0e.png",
    description: "Triple-distilled Saifi Agarwood with a complex profile of sweet florals, deep woods, and subtle spice notes.",
    suitableFor: ["Daily Luxury", "Gifting"]
  },
  {
    id: "bal-moori",
    name: "Bal Moori",
    arabicName: "بال موري",
    subtitle: "Heritage Collection",
    type: "Oud Chips",
    price: 700,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png",
    description: "A balanced Moori Agarwood offering sweet, woody notes with exceptional staying power and complex development.",
    suitableFor: ["Daily Use", "New Collectors"]
  },
  {
    id: "moori-triple",
    name: "Moori Triple",
    arabicName: "موري تريبل",
    subtitle: "Premium Selection",
    type: "Oud Chips",
    price: 750,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
    description: "Triple-distilled Moori Agarwood offering an intensified, complex aroma with remarkable depth and character.",
    suitableFor: ["Connoisseurs", "Special Occasions"]
  },
  {
    id: "barri",
    name: "Barri",
    arabicName: "بري",
    subtitle: "Classic Collection",
    type: "Oud Chips",
    price: 600,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png",
    description: "Wild-harvested Barri Agarwood with distinctive earthy character and natural complexity.",
    suitableFor: ["Nature Enthusiasts", "Daily Use"]
  },
  {
    id: "double-face",
    name: "Double Face",
    arabicName: "دبل فيس",
    subtitle: "Artisan Collection",
    type: "Oud Chips",
    price: 800,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/af52e074-28e0-4c42-815b-a0498fedbf0e.png",
    description: "Uniquely dual-character oud that transforms remarkably from initial burn to settled aroma.",
    suitableFor: ["Collectors", "Experience Seekers"]
  },
  {
    id: "malaki",
    name: "Malaki",
    arabicName: "ملكي",
    subtitle: "Royal Collection",
    type: "Oud Chips",
    price: 950,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png",
    description: "Our royal grade agarwood with majestic character, deep complexity, and noble presence.",
    suitableFor: ["VIP Gifting", "Royal Occasions"]
  },
  {
    id: "joura-super",
    name: "Joura Super",
    arabicName: "جورا سوبر",
    subtitle: "Ultra Premium",
    type: "Oud Chips",
    price: 1200,
    pricePerGram: true,
    currency: "AED",
    image: "/lovable-uploads/538e6910-0ab6-4c27-96c9-3839ea9c4dd0.png",
    description: "The ultimate expression of Joura Agarwood, offering unparalleled complexity, rarity, and prestige.",
    suitableFor: ["Elite Collectors", "Museum-Grade Collections"]
  }
];

// Sample testimonials with masked customer names
const testimonials = [
  {
    id: "t1",
    name: "MXXXXX A. XXX",
    title: "Oud Collector",
    quote: "The Joura Triple from FARAN has a complexity that I've rarely experienced. Its delicate notes unfold over time, revealing new dimensions."
  },
  {
    id: "t2",
    name: "SXXXXX XXX MXXXXX",
    title: "Fragrance Connoisseur",
    quote: "The authenticity of FARAN's Malaki is beyond compare. I appreciate the transparency in sourcing and the commitment to quality."
  },
  {
    id: "t3",
    name: "AXXXXX XXX RXXXXX",
    title: "Oud Enthusiast",
    quote: "Joura Super from FARAN has become the centerpiece of my collection. Its rich profile is truly a testament to their expertise."
  }
];

// Categories for "Shop by Profile" section
const shopByProfile = [
  { 
    id: "gifting", 
    name: "Gifting", 
    arabicName: "الهدايا",
    products: ["malaki", "joura-triple", "saifi-triple"]
  },
  {
    id: "daily",
    name: "Daily Wear",
    arabicName: "الاستخدام اليومي",
    products: ["barri", "bal-moori"]
  },
  {
    id: "signature",
    name: "Signature Scent",
    arabicName: "العطر المميز",
    products: ["joura-super", "malaki", "moori-triple"]
  },
  {
    id: "collectors",
    name: "Collectors",
    arabicName: "المجموعات",
    products: ["joura-super", "double-face", "joura-triple"]
  }
];

const ProductGrid = () => {
  const { isRTL, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Function to get products by profile category
  const getProductsByProfile = (profileId: string) => {
    const category = shopByProfile.find(cat => cat.id === profileId);
    if (!category) return [];
    
    return category.products.map(productId => 
      oudProducts.find(product => product.id === productId)
    ).filter(Boolean);
  };

  // Why FARAN section content
  const whyFaranReasons = [
    {
      title: isRTL ? "جودة استثنائية" : "Exceptional Quality",
      description: isRTL 
        ? "نستخدم فقط أفضل أنواع العود، مع عملية اختيار صارمة لضمان تقديم أرقى المنتجات."
        : "We use only the finest oud, with a rigorous selection process to ensure the most refined products."
    },
    {
      title: isRTL ? "حرفية تقليدية" : "Traditional Craftsmanship",
      description: isRTL 
        ? "نجمع بين الأساليب التقليدية الموروثة والتقنيات الحديثة لإنشاء عطور فريدة من نوعها."
        : "We combine inherited traditional methods with modern techniques to create truly unique fragrances."
    },
    {
      title: isRTL ? "إرث متجذر" : "Deep Heritage",
      description: isRTL 
        ? "كل منتج يحمل قصة إرث عريق متجذر في تقاليد صناعة العطور العربية الأصيلة."
        : "Each product carries a story of rich heritage rooted in authentic Arabian perfumery traditions."
    }
  ];

  return (
    <section className="py-16 bg-faran-cream">
      <div className="container-custom">
        {/* Section 1: Product Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-faran-brown">
            {isRTL ? "مجموعة فاران" : "The FARAN Collection"}
          </h2>
          <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
          <p className="text-faran-brown/80 max-w-2xl mx-auto">
            {isRTL 
              ? "اكتشف مجموعتنا الحصرية من أرقى أنواع العود والعطور الفاخرة. كل قطعة تروي قصة إرث وحرفية وجودة لا مثيل لها."
              : "Discover our exclusive collection of premium oud and luxury fragrances. Each piece tells a story of heritage, craftsmanship, and uncompromising quality."}
          </p>
        </div>
        
        {/* Modern Tabs Interface */}
        <div className="mb-16" id="bestsellers">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border border-faran-gold/30">
                <TabsTrigger value="all" className="data-[state=active]:bg-faran-gold data-[state=active]:text-white">
                  {isRTL ? "كل المنتجات" : "All Products"}
                </TabsTrigger>
                <TabsTrigger value="profile" className="data-[state=active]:bg-faran-gold data-[state=active]:text-white" id="profile">
                  {isRTL ? "تسوق حسب الاستخدام" : "Shop by Profile"}
                </TabsTrigger>
                <TabsTrigger value="bestsellers" className="data-[state=active]:bg-faran-gold data-[state=active]:text-white">
                  {isRTL ? "الأكثر مبيعاً" : "Bestsellers"}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* All Products */}
            <TabsContent value="all" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {oudProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Shop by Profile */}
            <TabsContent value="profile" className="mt-0">
              <div className="mb-8">
                <Tabs defaultValue="gifting" className="w-full">
                  <div className="flex justify-center mb-8 overflow-x-auto py-2">
                    <TabsList className="bg-white border border-faran-gold/30">
                      {shopByProfile.map(profile => (
                        <TabsTrigger 
                          key={profile.id} 
                          value={profile.id}
                          className="data-[state=active]:bg-faran-gold data-[state=active]:text-white"
                        >
                          {isRTL ? profile.arabicName : profile.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {shopByProfile.map(profile => (
                    <TabsContent key={profile.id} value={profile.id} className="mt-0">
                      <h3 className="text-xl font-serif mb-6 text-center text-faran-brown">
                        {isRTL ? `أفضل المنتجات لـ ${profile.arabicName}` : `Perfect for ${profile.name}`}
                      </h3>
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        {getProductsByProfile(profile.id).map((product: any) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </motion.div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>

            {/* Bestsellers */}
            <TabsContent value="bestsellers" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {oudProducts
                  .filter(p => ["joura-super", "malaki", "joura-triple"].includes(p.id))
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                }
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Section 2: Why FARAN? */}
        <div className="mt-32 mb-32 bg-faran-beige p-12 rounded-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-faran-brown">
              {isRTL ? "لماذا فاران؟" : "Why FARAN?"}
            </h2>
            <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyFaranReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-sm shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-faran-softGold flex items-center justify-center mb-4 mx-auto">
                  <span className="text-faran-gold text-xl font-serif">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif text-center mb-3 text-faran-brown">{reason.title}</h3>
                <p className="text-center text-faran-brown/80">{reason.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href={`https://wa.me/971557993441?text=${encodeURIComponent("Hello FARAN, I'd like to learn more about your products.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-luxury inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              {isRTL ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>
        </div>
        
        {/* Section 3: Customer Testimonials */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-faran-brown">
              {isRTL ? "آراء العملاء" : "Client Testimonials"}
            </h2>
            <div className="w-20 h-[1px] bg-faran-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((item) => (
              <motion.div 
                key={item.id}
                className="bg-white border border-faran-gold/10 p-6 rounded-sm shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-faran-brown/80 italic mb-4">"{item.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-faran-softGold flex items-center justify-center text-faran-gold">
                    {item.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-faran-gold font-medium">{item.name}</p>
                    <p className="text-sm text-faran-brown/60">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
