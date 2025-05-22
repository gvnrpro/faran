
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { language, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu when the route changes
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLanguagePrefix = () => {
    return `/${language}`;
  };

  const navItems = [
    { name: t("nav.home"), path: `${getLanguagePrefix()}` },
    { name: t("nav.shop"), path: `${getLanguagePrefix()}/shop` },
    { name: t("nav.custom"), path: `${getLanguagePrefix()}/custom-orders` },
    { name: t("nav.contact"), path: `${getLanguagePrefix()}/contact` }
  ];

  return (
    <nav className={`py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-faran-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to={getLanguagePrefix()} className="text-2xl font-bold text-white">
          <img src="/lovable-uploads/a206e9b1-f855-4dae-bf84-b9e4a1e92871.png" alt="FARAN Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-8`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                location.pathname === item.path ? 'text-faran-gold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <a
            href="https://wa.me/971XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
          
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "left" : "right"} className="bg-faran-black text-white">
              <SheetHeader>
                <SheetTitle className="text-faran-gold">{isRTL ? "القائمة" : "Navigation"}</SheetTitle>
                <SheetDescription className="text-gray-300">
                  {isRTL ? "استكشف فاران" : "Explore FARAN"}
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`text-gray-300 hover:text-white transition-colors duration-300 block py-2 ${
                      location.pathname === item.path ? 'text-faran-gold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on item click
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/971XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
