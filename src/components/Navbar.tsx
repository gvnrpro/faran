
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, isRTL } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.collection"), href: "#collection" },
    { name: t("nav.legacy"), href: "#legacy" },
    { name: t("nav.craftsmanship"), href: "#craftsmanship" },
    { name: t("nav.contact"), href: "#contact" }
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-white">
              <img
                src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png"
                alt="FARAN"
                className="h-10 md:h-12"
              />
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className={`flex space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-white hover:text-faran-gold transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button className="ml-4 text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-faran-black">
          <ul className={`px-4 pt-2 pb-4 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="block text-white hover:text-faran-gold px-3 py-2 text-base uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
