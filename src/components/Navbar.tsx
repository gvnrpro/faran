
import React, { useState, useEffect } from "react";
import { Menu, X, Search, Heart, ShoppingCart, User } from "lucide-react";
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

  // Updated navigation items as per the requirements
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { 
      name: "SHOP", 
      href: "#",
      submenu: [
        { name: "Oud Chips", href: "#oud-chips" },
        { name: "Oud Oils", href: "#oud-oils" },
        { name: "Exclusive Perfumes", href: "#perfumes" },
        { name: "Gift Sets", href: "#gift-sets" },
        { name: "Custom Orders", href: "#custom-orders" },
        { name: "Limited Editions", href: "#limited-editions" },
      ]
    },
    { name: "LEGACY", href: "#legacy" },
    { name: "CRAFTSMANSHIP", href: "#craftsmanship" },
    { name: "CONTACT", href: "#contact" }
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

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
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
              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png"
                  alt="FARAN"
                  className={`transition-all duration-300 ${scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'}`}
                />
              </div>
            </a>
          </div>
          
          <nav className="hidden lg:block">
            <ul className={`flex space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                  className="relative"
                  onMouseEnter={() => item.submenu && setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a 
                    href={item.href}
                    className="text-white hover:text-faran-gold transition-colors duration-300 text-sm uppercase tracking-widest relative group py-2 block"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-faran-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  
                  {/* Submenu for SHOP */}
                  {item.submenu && hoveredItem === item.name && (
                    <motion.div 
                      className="absolute top-full left-0 bg-black/95 backdrop-blur-md min-w-[200px] py-2 border-t border-faran-gold/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.submenu.map((subItem, j) => (
                        <motion.a 
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:text-faran-gold hover:bg-white/5 transition-colors duration-200"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.05 }}
                        >
                          {subItem.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
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
          
          {/* Utility icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-faran-gold transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-faran-gold transition-colors duration-300">
              <Heart size={20} />
            </button>
            <button className="text-white hover:text-faran-gold transition-colors duration-300 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-faran-gold text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="text-white hover:text-faran-gold transition-colors duration-300">
              <User size={20} />
            </button>
          </div>
          
          <div className="flex items-center lg:hidden">
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
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-faran-gold/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={`px-6 py-4 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navItems.map((item, i) => (
                <React.Fragment key={item.name}>
                  <motion.li 
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a 
                      href={item.href}
                      className="block text-white hover:text-faran-gold py-3 text-base uppercase tracking-widest border-b border-white/10"
                      onClick={() => !item.submenu && setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                  
                  {/* Mobile submenu for SHOP */}
                  {item.submenu && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="pl-4 space-y-1 py-2"
                    >
                      {item.submenu.map((subItem, j) => (
                        <motion.li 
                          key={subItem.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.05 + 0.2 }}
                        >
                          <a 
                            href={subItem.href}
                            className="block text-white/80 hover:text-faran-gold py-2 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </React.Fragment>
              ))}
            </ul>
            
            {/* Mobile utility icons */}
            <div className="flex justify-around px-6 py-4 border-t border-white/10">
              <button className="text-white hover:text-faran-gold transition-colors duration-300 p-2">
                <Search size={20} />
              </button>
              <button className="text-white hover:text-faran-gold transition-colors duration-300 p-2">
                <Heart size={20} />
              </button>
              <button className="text-white hover:text-faran-gold transition-colors duration-300 p-2 relative">
                <ShoppingCart size={20} />
                <span className="absolute top-1 right-1 bg-faran-gold text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="text-white hover:text-faran-gold transition-colors duration-300 p-2">
                <User size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
