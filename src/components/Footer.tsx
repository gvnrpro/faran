
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const { t, isRTL } = useLanguage();
  
  const exploreLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Collection", href: "#collection" },
    { name: "Legacy", href: "#legacy" },
    { name: "Craftsmanship", href: "#craftsmanship" },
    { name: "Contact", href: "#contact" }
  ];
  
  const collectionLinks = [
    { name: "Oud Oils", href: "#" },
    { name: "Premium Chips", href: "#" },
    { name: "Exclusive Perfumes", href: "#" },
    { name: "Gift Sets", href: "#" },
    { name: "Custom Orders", href: "#" },
    { name: "Limited Editions", href: "#" }
  ];

  return (
    <footer className={`bg-faran-black text-white/70 pt-16 pb-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img 
              src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png" 
              alt="FARAN" 
              className="h-10 mb-6" 
            />
            <p className="mb-6">
              {isRTL 
                ? "فران ليس مجرد عطر يرتدى. بل هو عطر يُكرَم، يُشارك، ويُتذكر. بيت عطور فاخر متخصص في العود والعطور الراقية، متجذر في التقاليد العربية."
                : "FARAN is not merely worn. It is honored, shared, remembered. A luxury oud and fragrance house rooted in Arabian tradition."}
            </p>
            <div className="text-faran-gold">
              {t("footer.tagline")}
            </div>
          </div>
          
          <div>
            <h3 className="text-faran-gold font-serif text-lg mb-6">{t("footer.explore")}</h3>
            <ul className="space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="hover:text-faran-gold transition-colors duration-300"
                  >
                    {isRTL ? t(`nav.${item.name.toLowerCase()}`) : item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-faran-gold font-serif text-lg mb-6">{isRTL ? "المجموعات" : "Collections"}</h3>
            <ul className="space-y-4">
              {collectionLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="hover:text-faran-gold transition-colors duration-300"
                  >
                    {isRTL ? (item.name === "Oud Oils" ? "زيوت العود" : 
                             item.name === "Premium Chips" ? "رقائق العود الفاخرة" :
                             item.name === "Exclusive Perfumes" ? "عطور حصرية" :
                             item.name === "Gift Sets" ? "مجموعات الهدايا" :
                             item.name === "Custom Orders" ? "طلبات خاصة" :
                             "إصدارات محدودة") : item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-faran-gold font-serif text-lg mb-6">{isRTL ? "اتصل بنا" : "Contact"}</h3>
            <ul className="space-y-4">
              <li>{t("footer.boutique")}</li>
              <li>{t("footer.address")}</li>
              <li>{t("footer.location")}</li>
              <li className="pt-2">
                <a href="tel:+97100000000" className="hover:text-faran-gold">+971 0 000 0000</a>
              </li>
              <li>
                <a href="mailto:inquiries@faran.ae" className="hover:text-faran-gold">inquiries@faran.ae</a>
              </li>
              <li className="pt-4">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {isRTL ? "فران للعطور الفاخرة. جميع الحقوق محفوظة." : "FARAN Luxury Fragrances. All rights reserved."}
          </div>
          <div className={`flex space-x-6 text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-faran-gold">{isRTL ? "سياسة الخصوصية" : "Privacy Policy"}</a>
            <a href="#" className="hover:text-faran-gold">{isRTL ? "شروط الخدمة" : "Terms of Service"}</a>
            <a href="#" className="hover:text-faran-gold">{isRTL ? "الشحن والإرجاع" : "Shipping & Returns"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
