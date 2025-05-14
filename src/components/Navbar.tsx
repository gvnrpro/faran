
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

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
  
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({ 
      opacity: 1, 
      x: 0, 
      transition: { delay: i * 0.1, duration: 0.4 } 
    }),
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };
  
  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      } ${scrolled ? 'py-2' : 'py-4'}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white relative z-10">
              <img
                src="/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png"
                alt="FARAN"
                className={`transition-all duration-300 ${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
              />
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className={`flex space-x-10 ${isRTL ? 'space-x-reverse' : ''}`}>
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                >
                  <a 
                    href={item.href}
                    className="text-white hover:text-faran-gold transition-colors duration-300 text-sm uppercase tracking-widest relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-faran-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                custom={navItems.length}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <LanguageSwitcher />
              </motion.li>
            </ul>
          </nav>
          
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button 
              className={`ml-4 text-white p-1 transition-colors duration-300 hover:text-faran-gold ${
                isOpen ? 'bg-faran-black/60' : 'bg-transparent'
              }`} 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-faran-gold/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={`px-6 py-4 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a 
                    href={item.href}
                    className="block text-white hover:text-faran-gold py-2 text-base uppercase tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
