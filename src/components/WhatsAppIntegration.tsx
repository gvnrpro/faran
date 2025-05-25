
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, CheckCircle, Star } from "lucide-react";

interface WhatsAppOrder {
  productName: string;
  price: string;
  quantity?: number;
  customization?: string;
  urgency?: 'normal' | 'urgent';
}

const WhatsAppIntegration = ({ 
  product, 
  showQuickOrder = true, 
  showConsultation = true 
}: { 
  product?: WhatsAppOrder;
  showQuickOrder?: boolean;
  showConsultation?: boolean;
}) => {
  const { language, isRTL } = useLanguage();
  const [orderType, setOrderType] = useState<'quick' | 'consultation' | 'custom'>('quick');
  const [formData, setFormData] = useState({
    name: '',
    quantity: 1,
    customization: '',
    urgency: 'normal' as 'normal' | 'urgent'
  });

  const whatsappNumber = "971557993441";

  const generateWhatsAppMessage = () => {
    const greeting = isRTL 
      ? "السلام عليكم ورحمة الله وبركاته"
      : "Assalamu Alaikum and greetings from FARAN";

    let message = `${greeting}\n\n`;

    switch (orderType) {
      case 'quick':
        message += isRTL 
          ? `أرغب في طلب:\n📦 ${product?.productName}\n💰 السعر: ${product?.price}\n📊 الكمية: ${formData.quantity}\n\nأرجو التأكيد والمتابعة.`
          : `I would like to order:\n📦 ${product?.productName}\n💰 Price: ${product?.price}\n📊 Quantity: ${formData.quantity}\n\nPlease confirm and proceed.`;
        break;
      
      case 'consultation':
        message += isRTL
          ? `أرغب في استشارة شخصية حول:\n🌟 اختيار العطر المناسب لشخصيتي\n🎁 العطور المناسبة للإهداء\n✨ التركيبات الخاصة\n\nمتى يمكنني الحصول على الاستشارة؟`
          : `I would like a personal consultation about:\n🌟 Choosing the right fragrance for my personality\n🎁 Suitable fragrances for gifting\n✨ Custom blends\n\nWhen can I schedule a consultation?`;
        break;

      case 'custom':
        message += isRTL
          ? `أرغب في طلب مخصص:\n${formData.customization ? `📝 التفاصيل: ${formData.customization}` : '📝 أحتاج مساعدة في تحديد متطلباتي'}\n\nأرجو التواصل لمناقشة التفاصيل.`
          : `I would like a custom order:\n${formData.customization ? `📝 Details: ${formData.customization}` : '📝 I need help defining my requirements'}\n\nPlease contact me to discuss details.`;
        break;
    }

    if (formData.urgency === 'urgent') {
      message += isRTL 
        ? "\n\n⚡ عاجل: أحتاج هذا الطلب في أقرب وقت ممكن"
        : "\n\n⚡ Urgent: I need this order as soon as possible";
    }

    message += isRTL
      ? "\n\nشكراً لكم، وأنتظر ردكم الكريم."
      : "\n\nThank you, and I await your kind response.";

    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickActions = [
    {
      id: 'quick',
      title: isRTL ? 'طلب سريع' : 'Quick Order',
      description: isRTL ? 'اطلب منتج محدد مباشرة' : 'Order a specific product directly',
      icon: MessageCircle,
      color: 'bg-green-500'
    },
    {
      id: 'consultation',
      title: isRTL ? 'استشارة شخصية' : 'Personal Consultation',
      description: isRTL ? 'احصل على نصائح من خبرائنا' : 'Get advice from our experts',
      icon: Star,
      color: 'bg-faran-gold'
    },
    {
      id: 'custom',
      title: isRTL ? 'طلب مخصص' : 'Custom Order',
      description: isRTL ? 'اطلب تركيبة خاصة بك' : 'Request a personalized blend',
      icon: CheckCircle,
      color: 'bg-faran-brass'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-faran-gold/20 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-faran-gold to-faran-brass p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <MessageCircle size={24} />
          <h3 className="text-xl font-serif">
            {isRTL ? "تواصل معنا عبر واتساب" : "Connect via WhatsApp"}
          </h3>
        </div>
        <p className="text-white/90">
          {isRTL 
            ? "خدمة شخصية فورية • متاح 24/7 • دعم باللغة العربية والإنجليزية"
            : "Instant personal service • Available 24/7 • Arabic & English support"}
        </p>
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => setOrderType(action.id as any)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                orderType === action.id
                  ? 'border-faran-gold bg-faran-gold/10'
                  : 'border-gray-200 hover:border-faran-gold/50'
              }`}
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                <action.icon size={20} className="text-white" />
              </div>
              <h4 className="font-semibold text-faran-night mb-1">{action.title}</h4>
              <p className="text-sm text-faran-charcoal/70">{action.description}</p>
            </button>
          ))}
        </div>

        {/* Order Form */}
        <div className="space-y-4">
          {orderType === 'quick' && product && (
            <div className="bg-faran-beige p-4 rounded-lg">
              <h4 className="font-semibold text-faran-night mb-2">
                {isRTL ? "تفاصيل الطلب" : "Order Details"}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-faran-charcoal mb-1">
                    {isRTL ? "المنتج" : "Product"}
                  </label>
                  <p className="font-medium">{product.productName}</p>
                </div>
                <div>
                  <label className="block text-sm text-faran-charcoal mb-1">
                    {isRTL ? "السعر" : "Price"}
                  </label>
                  <p className="font-medium text-faran-gold">{product.price}</p>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-faran-charcoal mb-1">
                  {isRTL ? "الكمية" : "Quantity"}
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
                  className="w-full p-2 border border-faran-gold/30 rounded focus:border-faran-gold focus:outline-none"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {orderType === 'custom' && (
            <div>
              <label className="block text-sm text-faran-charcoal mb-2">
                {isRTL ? "اشرح لنا ما تريده" : "Tell us what you want"}
              </label>
              <textarea
                value={formData.customization}
                onChange={(e) => setFormData({...formData, customization: e.target.value})}
                placeholder={isRTL 
                  ? "مثال: عطر شرقي فاخر للمناسبات الخاصة، يجمع بين العود والعنبر..."
                  : "Example: Luxurious oriental fragrance for special occasions, combining oud and amber..."
                }
                className="w-full p-3 border border-faran-gold/30 rounded-lg focus:border-faran-gold focus:outline-none resize-none"
                rows={4}
              />
            </div>
          )}

          {/* Urgency Options */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-faran-charcoal">
              {isRTL ? "الأولوية:" : "Priority:"}
            </span>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="urgency"
                value="normal"
                checked={formData.urgency === 'normal'}
                onChange={(e) => setFormData({...formData, urgency: e.target.value as any})}
                className="text-faran-gold"
              />
              <span className="text-sm">{isRTL ? "عادية" : "Normal"}</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="urgency"
                value="urgent"
                checked={formData.urgency === 'urgent'}
                onChange={(e) => setFormData({...formData, urgency: e.target.value as any})}
                className="text-faran-gold"
              />
              <span className="text-sm flex items-center gap-1">
                <Clock size={14} />
                {isRTL ? "عاجل" : "Urgent"}
              </span>
            </label>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={openWhatsApp}
          className="w-full btn-luxury mt-6 bg-green-600 hover:bg-green-700 flex items-center justify-center gap-3"
        >
          <MessageCircle size={20} />
          <span>
            {isRTL ? "إرسال عبر واتساب" : "Send via WhatsApp"}
          </span>
        </button>

        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-faran-beige">
          <div className="flex items-center justify-center gap-6 text-sm text-faran-charcoal/70">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>{isRTL ? "رد فوري" : "Instant Response"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-faran-gold" />
              <span>{isRTL ? "دعم شخصي" : "Personal Support"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-faran-gold" />
              <span>{isRTL ? "خبرة 15+ سنة" : "15+ Years Experience"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppIntegration;
