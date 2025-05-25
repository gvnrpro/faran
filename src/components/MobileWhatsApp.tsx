
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Star, ShoppingBag } from "lucide-react";

interface MobileWhatsAppProps {
  productName?: string;
  productPrice?: string;
}

const MobileWhatsApp = ({ productName, productPrice }: MobileWhatsAppProps) => {
  const { language, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string>('');

  const whatsappNumber = "971557993441";

  const quickActions = [
    {
      id: 'order',
      title: isRTL ? 'طلب سريع' : 'Quick Order',
      icon: ShoppingBag,
      color: 'bg-green-500',
      message: productName ? 
        `${isRTL ? 'أرغب في طلب' : 'I would like to order'}: ${productName} (${productPrice})` :
        `${isRTL ? 'أرغب في تصفح منتجاتكم' : 'I would like to browse your products'}`
    },
    {
      id: 'consultation',
      title: isRTL ? 'استشارة' : 'Consultation',
      icon: Star,
      color: 'bg-faran-gold',
      message: isRTL ? 
        'أحتاج استشارة شخصية لاختيار العطر المناسب' :
        'I need personal consultation to choose the right fragrance'
    },
    {
      id: 'call',
      title: isRTL ? 'اتصال' : 'Call',
      icon: Phone,
      color: 'bg-blue-500',
      message: isRTL ?
        'أرغب في التحدث مع أحد المختصين' :
        'I would like to speak with a specialist'
    }
  ];

  const openWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleCall = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Mobile WhatsApp Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-faran-brown">
                      {isRTL ? "تواصل معنا" : "Contact Us"}
                    </h3>
                    <p className="text-sm text-faran-brown/70">
                      {isRTL ? "متاح الآن" : "Available now"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Product Context (if available) */}
              {productName && (
                <div className="bg-faran-beige p-4 rounded-lg mb-6">
                  <p className="text-sm text-faran-brown/70 mb-1">
                    {isRTL ? "المنتج الحالي:" : "Current product:"}
                  </p>
                  <p className="font-medium text-faran-brown">{productName}</p>
                  {productPrice && (
                    <p className="text-faran-gold font-semibold">{productPrice}</p>
                  )}
                </div>
              )}

              {/* Quick Actions */}
              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-faran-brown mb-3">
                  {isRTL ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                </h4>
                
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => {
                      if (action.id === 'call') {
                        handleCall();
                      } else {
                        openWhatsApp(action.message);
                      }
                    }}
                    className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-left"
                  >
                    <div className={`w-10 h-10 ${action.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <action.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-faran-brown">{action.title}</p>
                      <p className="text-sm text-faran-brown/70 line-clamp-1">
                        {action.message}
                      </p>
                    </div>
                    <Send size={16} className="text-faran-gold" />
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-faran-brown/70">
                  <span>{isRTL ? "رد فوري خلال دقائق" : "Instant response within minutes"}</span>
                  <span>{isRTL ? "متاح 24/7" : "Available 24/7"}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileWhatsApp;
