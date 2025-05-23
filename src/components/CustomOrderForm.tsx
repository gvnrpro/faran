
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  budget: z.string().optional(),
  description: z.string().min(20, { message: "Please provide more details (minimum 20 characters)" }),
  inspiration: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

const CustomOrderForm = () => {
  const { isRTL } = useLanguage();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      description: "",
      inspiration: ""
    }
  });
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    toast.success(isRTL ? "تم إرسال طلبك بنجاح" : "Your custom order request has been submitted successfully", {
      description: isRTL 
        ? "سيتواصل معك أحد خبراء فاران في أقرب وقت ممكن"
        : "A FARAN specialist will contact you shortly to discuss your request",
      duration: 5000
    });
    
    form.reset();
  };

  return (
    <section id="custom-form" className="py-24 bg-faran-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-6 text-faran-brown">
              {isRTL ? "ابدأ رحلة العطر المخصص" : "Begin Your Bespoke Oud Journey"}
            </h3>
            
            <div className="w-20 h-[1px] bg-faran-gold mb-8"></div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-faran-brown">
                            {isRTL ? "الاسم" : "Name"} *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={isRTL ? "الاسم الكامل" : "Full Name"} 
                              className="border-faran-gold/30 focus:border-faran-gold" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-faran-brown">
                            {isRTL ? "البريد الإلكتروني" : "Email"} *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={isRTL ? "البريد الإلكتروني" : "Email Address"} 
                              className="border-faran-gold/30 focus:border-faran-gold" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-faran-brown">
                            {isRTL ? "رقم الهاتف" : "Phone"} *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={isRTL ? "رقم الهاتف" : "Phone Number"} 
                              className="border-faran-gold/30 focus:border-faran-gold" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-faran-brown">
                            {isRTL ? "الميزانية التقريبية" : "Approximate Budget"}
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={isRTL ? "الميزانية بالدرهم الإماراتي" : "Budget in AED"} 
                              className="border-faran-gold/30 focus:border-faran-gold" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-faran-brown">
                          {isRTL ? "وصف العطر المطلوب" : "Description of Desired Fragrance"} *
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={isRTL 
                              ? "صف العطر الذي تتخيله، بما في ذلك نوع العود والروائح التي تفضلها والمشاعر التي ترغب في استحضارها"
                              : "Describe the fragrance you envision, including type of oud, preferred scents, and emotions you wish to evoke"
                            } 
                            className="border-faran-gold/30 focus:border-faran-gold min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="inspiration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-faran-brown">
                          {isRTL ? "مصادر الإلهام" : "Sources of Inspiration"}
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={isRTL
                              ? "أي عطور حالية تحبها، أو ذكريات، أو أماكن، أو مشاعر تود أن تؤثر في العطر المخصص الخاص بك"
                              : "Any existing fragrances you love, memories, places, or emotions you'd like to influence your bespoke scent"
                            } 
                            className="border-faran-gold/30 focus:border-faran-gold" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="btn-luxury w-full md:w-auto flex items-center justify-center gap-2"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <span>{isRTL ? "جاري الإرسال..." : "Submitting..."}</span>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>{isRTL ? "إرسال الطلب" : "Submit Request"}</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-sm text-faran-brown/60 mt-4">
                    {isRTL 
                      ? "* تشير إلى الحقول المطلوبة. سيتم الاتصال بك خلال 24-48 ساعة لمناقشة طلبك."
                      : "* Indicates required fields. You will be contacted within 24-48 hours to discuss your request."}
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Right side - Info/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-md">
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-faran-brown/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <h4 className="text-2xl md:text-3xl font-serif mb-4 text-white relative z-10">
                    {isRTL ? "عطر ينطق بهويتك" : "A Fragrance That Speaks Your Identity"}
                  </h4>
                  <p className="text-white/90 mb-6 max-w-md relative z-10">
                    {isRTL
                      ? "يسعدنا في فاران تقديم خدمة أبعد من المعتاد، تتيح لك إنشاء عطر فريد يعكس قصتك وإرثك وذوقك الفريد."
                      : "At FARAN, we are delighted to offer a service beyond the ordinary, allowing you to create a unique fragrance that reflects your story, legacy, and distinct taste."}
                  </p>
                  <div className="w-16 h-[1px] bg-faran-gold mb-6 relative z-10"></div>
                  <p className="text-faran-gold italic relative z-10">
                    {isRTL ? "لأن عطرك يروي قصتك" : "Because your fragrance tells your story"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderForm;
