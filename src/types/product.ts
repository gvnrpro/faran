
export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: {
    amount: number;
    currency: string;
  };
  images: string[];
  category: string;
  inStock: boolean;
  scentProfile: {
    en: string[];
    ar: string[];
  };
  origin: {
    en: string;
    ar: string;
  };
  distillationNotes: {
    en: string;
    ar: string;
  };
  size?: string;
  intensity?: 'Light' | 'Medium' | 'Strong';
}

export interface ProductCategory {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}
