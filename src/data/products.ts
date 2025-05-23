
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'joura-triple',
    name: {
      en: 'Joura Triple',
      ar: 'جورا تريبل'
    },
    description: {
      en: 'An exquisite triple-distilled oud with deep, complex notes that evolve beautifully on the skin.',
      ar: 'عود مقطر ثلاث مرات بنوتات عميقة ومعقدة تتطور بجمال على البشرة.'
    },
    price: {
      amount: 2500,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/e163adc4-b7bb-43eb-b9f9-79c9ca278d1a.png',
      '/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png'
    ],
    category: 'premium-oud',
    inStock: true,
    scentProfile: {
      en: ['Woody', 'Smoky', 'Complex', 'Long-lasting'],
      ar: ['خشبي', 'دخاني', 'معقد', 'طويل الأمد']
    },
    origin: {
      en: 'Assam, India - Aged 15 years',
      ar: 'آسام، الهند - معتق 15 سنة'
    },
    distillationNotes: {
      en: 'Triple-distilled using traditional methods, this exceptional oud offers unparalleled depth and complexity.',
      ar: 'مقطر ثلاث مرات باستخدام الطرق التقليدية، يقدم هذا العود الاستثنائي عمقاً وتعقيداً لا مثيل له.'
    },
    intensity: 'Strong'
  },
  {
    id: 'saifi-triple',
    name: {
      en: 'Saifi Triple',
      ar: 'سيفي تريبل'
    },
    description: {
      en: 'A refined triple-distilled oud with elegant floral undertones and sophisticated woody base.',
      ar: 'عود مقطر ثلاث مرات مع نغمات زهرية أنيقة وقاعدة خشبية راقية.'
    },
    price: {
      amount: 2200,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/4c1298de-d9f2-4fb7-9c77-16568829518c.png',
      '/lovable-uploads/e1969beb-317c-40fe-8a64-610474e345c6.png'
    ],
    category: 'premium-oud',
    inStock: true,
    scentProfile: {
      en: ['Floral', 'Woody', 'Elegant', 'Refined'],
      ar: ['زهري', 'خشبي', 'أنيق', 'راقي']
    },
    origin: {
      en: 'Cambodia - Aged 12 years',
      ar: 'كمبوديا - معتق 12 سنة'
    },
    distillationNotes: {
      en: 'Carefully crafted through triple distillation, revealing layers of sophistication and grace.',
      ar: 'مصنوع بعناية من خلال التقطير الثلاثي، يكشف طبقات من الرقي والأناقة.'
    },
    intensity: 'Medium'
  },
  {
    id: 'bal-moori',
    name: {
      en: 'Bal Moori',
      ar: 'بال موري'
    },
    description: {
      en: 'A classic oud with rich, earthy tones and hints of sweetness that captivate the senses.',
      ar: 'عود كلاسيكي بنغمات ترابية غنية ولمسات من الحلاوة تأسر الحواس.'
    },
    price: {
      amount: 1800,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/595eafb4-7374-49a2-929c-240c983567af.png',
      '/lovable-uploads/74f39662-0486-4685-8439-e0f8d2343a16.png'
    ],
    category: 'classic-oud',
    inStock: true,
    scentProfile: {
      en: ['Earthy', 'Sweet', 'Classic', 'Warm'],
      ar: ['ترابي', 'حلو', 'كلاسيكي', 'دافئ']
    },
    origin: {
      en: 'Bangladesh - Traditional harvest',
      ar: 'بنغلاديش - حصاد تقليدي'
    },
    distillationNotes: {
      en: 'Traditional distillation methods preserve the authentic character of this timeless fragrance.',
      ar: 'طرق التقطير التقليدية تحافظ على الطابع الأصيل لهذا العطر الخالد.'
    },
    intensity: 'Medium'
  },
  {
    id: 'moori-triple',
    name: {
      en: 'Moori Triple',
      ar: 'موري تريبل'
    },
    description: {
      en: 'An intense triple-distilled oud with powerful projection and remarkable longevity.',
      ar: 'عود مقطر ثلاث مرات بقوة انتشار هائلة وثبات ملحوظ.'
    },
    price: {
      amount: 2800,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/528e54d7-7ac0-459b-9ad0-e2989ef086e9.png',
      '/lovable-uploads/768d9e31-d35e-4bb8-8c88-8e9112e78243.png'
    ],
    category: 'premium-oud',
    inStock: true,
    scentProfile: {
      en: ['Intense', 'Powerful', 'Long-lasting', 'Complex'],
      ar: ['قوي', 'مكثف', 'طويل الأمد', 'معقد']
    },
    origin: {
      en: 'Assam, India - Premium grade',
      ar: 'آسام، الهند - درجة ممتازة'
    },
    distillationNotes: {
      en: 'Master-crafted through triple distillation for maximum potency and character development.',
      ar: 'مصنوع بحرفية عالية من خلال التقطير الثلاثي لأقصى قوة وتطوير الطابع.'
    },
    intensity: 'Strong'
  },
  {
    id: 'barri',
    name: {
      en: 'Barri',
      ar: 'بري'
    },
    description: {
      en: 'A wild and untamed oud with raw, natural essence that speaks to the soul.',
      ar: 'عود بري وجامح بجوهر طبيعي خام يتحدث إلى الروح.'
    },
    price: {
      amount: 1500,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/6414b32e-f68e-4fd6-8f48-e04c77e210ee.png',
      '/lovable-uploads/8412a703-9f82-4b78-b579-4929fb6c743f.png'
    ],
    category: 'wild-oud',
    inStock: true,
    scentProfile: {
      en: ['Wild', 'Natural', 'Raw', 'Authentic'],
      ar: ['بري', 'طبيعي', 'خام', 'أصيل']
    },
    origin: {
      en: 'Wild harvest - Burma',
      ar: 'حصاد بري - بورما'
    },
    distillationNotes: {
      en: 'Minimal processing preserves the wild, untamed character of this exceptional oud.',
      ar: 'المعالجة البسيطة تحافظ على الطابع البري والجامح لهذا العود الاستثنائي.'
    },
    intensity: 'Strong'
  },
  {
    id: 'double-face',
    name: {
      en: 'Double Face',
      ar: 'دبل فيس'
    },
    description: {
      en: 'A dual-character oud that reveals different facets throughout its evolution on the skin.',
      ar: 'عود ذو طابع مزدوج يكشف عن أوجه مختلفة خلال تطوره على البشرة.'
    },
    price: {
      amount: 2000,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/af52e074-28e0-4c42-815b-a0498fedbf0e.png',
      '/lovable-uploads/bb67914c-f910-45dd-b446-aeed9a69a0fd.png'
    ],
    category: 'signature-oud',
    inStock: true,
    scentProfile: {
      en: ['Dual-character', 'Evolving', 'Mysterious', 'Unique'],
      ar: ['ذو طابع مزدوج', 'متطور', 'غامض', 'فريد']
    },
    origin: {
      en: 'Mixed origin - Artisan blend',
      ar: 'مصدر مختلط - مزيج حرفي'
    },
    distillationNotes: {
      en: 'A masterful blend of different oud varieties creates this unique dual-character fragrance.',
      ar: 'مزيج حرفي من أنواع مختلفة من العود يخلق هذا العطر الفريد ذو الطابع المزدوج.'
    },
    intensity: 'Medium'
  },
  {
    id: 'malaki',
    name: {
      en: 'Malaki',
      ar: 'ملكي'
    },
    description: {
      en: 'A royal oud befitting kings, with majestic presence and unparalleled nobility.',
      ar: 'عود ملكي يليق بالملوك، بحضور مهيب ونبل لا مثيل له.'
    },
    price: {
      amount: 3500,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/c3d22462-b827-4392-aa31-52651e0b2b19.png',
      '/lovable-uploads/e4f20b74-720a-4f3f-bec5-558fbe7b0faf.png'
    ],
    category: 'royal-oud',
    inStock: true,
    scentProfile: {
      en: ['Royal', 'Majestic', 'Noble', 'Luxurious'],
      ar: ['ملكي', 'مهيب', 'نبيل', 'فاخر']
    },
    origin: {
      en: 'Royal collection - Premium Assam',
      ar: 'المجموعة الملكية - آسام ممتاز'
    },
    distillationNotes: {
      en: 'Reserved for royalty, this exceptional oud represents the pinnacle of perfumery artistry.',
      ar: 'محجوز للملوك، يمثل هذا العود الاستثنائي قمة فن العطور.'
    },
    intensity: 'Strong'
  },
  {
    id: 'joura-super',
    name: {
      en: 'Joura Super',
      ar: 'جورا سوبر'
    },
    description: {
      en: 'The ultimate expression of Joura, elevated to extraordinary heights of excellence.',
      ar: 'التعبير النهائي عن جورا، مرفوع إلى مستويات استثنائية من التميز.'
    },
    price: {
      amount: 4000,
      currency: 'AED'
    },
    images: [
      '/lovable-uploads/ef1216b3-e509-41f3-8884-c3f9c175e42f.png',
      '/lovable-uploads/f3fe8f44-cb5b-48e3-bfae-8f1a1353cda4.png'
    ],
    category: 'super-premium',
    inStock: true,
    scentProfile: {
      en: ['Ultimate', 'Exceptional', 'Extraordinary', 'Masterpiece'],
      ar: ['نهائي', 'استثنائي', 'غير عادي', 'تحفة فنية']
    },
    origin: {
      en: 'Exclusive reserve - Aged 20+ years',
      ar: 'احتياطي حصري - معتق أكثر من 20 سنة'
    },
    distillationNotes: {
      en: 'The crown jewel of our collection, representing decades of perfumery mastery and tradition.',
      ar: 'جوهرة تاج مجموعتنا، تمثل عقود من الإتقان والتقاليد في فن العطور.'
    },
    intensity: 'Strong'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
