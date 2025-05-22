
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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

  const policyLinks = [
    { name: "Refund Policy", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Shipping & Delivery", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className={`bg-faran-beige text-faran-brown pt-16 pb-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img 
              src="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png" 
              alt="FARAN" 
              className="h-10 mb-6" 
            />
            <p className="mb-6 text-faran-brown/80">
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
                    className="text-faran-brown hover:text-faran-gold transition-colors duration-300"
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
                    className="text-faran-brown hover:text-faran-gold transition-colors duration-300"
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
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-faran-gold flex-shrink-0" />
                <span>FARAN Flagship Store<br />Arabilla Building, Abu Hail, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-faran-gold flex-shrink-0" />
                <a href="tel:+97145729188" className="hover:text-faran-gold">+971 4 572 9188</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-faran-gold flex-shrink-0" />
                <a href="https://wa.me/971557993441" className="hover:text-faran-gold">+971 55 799 3441</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-faran-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@faran.ae" className="hover:text-faran-gold">info@faran.ae</a>
                  <a href="mailto:sales@faran.ae" className="hover:text-faran-gold">sales@faran.ae</a>
                </div>
              </li>
              <li className="pt-4">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
        
        {/* Policies */}
        <div className="mt-12 pt-8 border-t border-faran-gold/20">
          <h3 className="text-faran-gold font-serif text-base mb-4">{isRTL ? "سياساتنا" : "Our Policies"}</h3>
          <ul className="flex flex-wrap gap-4">
            {policyLinks.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-faran-brown hover:text-faran-gold transition-colors duration-300 text-sm"
                >
                  {isRTL ? (
                    item.name === "Refund Policy" ? "سياسة الاسترداد" :
                    item.name === "Return Policy" ? "سياسة الإرجاع" :
                    item.name === "Shipping & Delivery" ? "الشحن والتوصيل" :
                    item.name === "Terms & Conditions" ? "الشروط والأحكام" :
                    "سياسة الخصوصية"
                  ) : item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={`mt-8 pt-8 border-t border-faran-gold/10 flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className="text-sm mb-4 md:mb-0 text-faran-brown/80">
            &copy; {new Date().getFullYear()} {isRTL ? "فران للعطور الفاخرة. جميع الحقوق محفوظة." : "FARAN Luxury Fragrances. All rights reserved."}
          </div>
          <div className={`flex space-x-6 text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
            <a href="#" className="text-faran-brown/80 hover:text-faran-gold">{isRTL ? "سياسة الخصوصية" : "Privacy Policy"}</a>
            <a href="#" className="text-faran-brown/80 hover:text-faran-gold">{isRTL ? "شروط الخدمة" : "Terms of Service"}</a>
            <a href="#" className="text-faran-brown/80 hover:text-faran-gold">{isRTL ? "الشحن والإرجاع" : "Shipping & Returns"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
