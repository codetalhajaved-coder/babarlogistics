import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { en: "Home", ar: "الرئيسية" },
  services: { en: "Services", ar: "الخدمات" },
  calculator: { en: "Calculator", ar: "حاسبة التكلفة" },
  quote: { en: "Get Quote", ar: "طلب عرض سعر" },
  contact: { en: "Contact", ar: "اتصل بنا" },
  
  // Hero
  heroTitle: { en: "Fast & Reliable", ar: "سريع وموثوق" },
  heroSubtitle: { en: "Logistics Solutions", ar: "حلول لوجستية" },
  heroDescription: { en: "Professional shipping and delivery services across Saudi Arabia. From Riyadh to anywhere in the Kingdom.", ar: "خدمات شحن وتوصيل احترافية في جميع أنحاء المملكة العربية السعودية. من الرياض إلى أي مكان في المملكة." },
  getQuote: { en: "Get a Quote", ar: "احصل على عرض سعر" },
  calculateCost: { en: "Calculate Cost", ar: "احسب التكلفة" },
  
  // Calculator
  quickCostEstimate: { en: "Quick Cost Estimate", ar: "تقدير سريع للتكلفة" },
  instantPricing: { en: "Get instant pricing in SAR", ar: "احصل على السعر فوراً بالريال" },
  distance: { en: "Distance (miles)", ar: "المسافة (ميل)" },
  enterDistance: { en: "Enter distance", ar: "أدخل المسافة" },
  total: { en: "Total", ar: "الإجمالي" },
  fullCalculator: { en: "Full Calculator", ar: "الحاسبة الكاملة" },
  proceedToQuote: { en: "Proceed to Quote", ar: "متابعة لطلب العرض" },
  confirmWhatsApp: { en: "Confirm via WhatsApp", ar: "تأكيد عبر واتساب" },
  
  // Calculator Info
  transparentPricing: { en: "Transparent Pricing", ar: "أسعار شفافة" },
  knowCosts: { en: "Know Your Costs", ar: "اعرف تكاليفك" },
  upfront: { en: "Upfront", ar: "مقدماً" },
  nohiddenFees: { en: "No hidden fees, no surprises. Simple pricing at 5 SAR per mile.", ar: "بدون رسوم خفية، بدون مفاجآت. سعر بسيط ٥ ريال لكل ميل." },
  step1Title: { en: "Enter Distance", ar: "أدخل المسافة" },
  step1Desc: { en: "Miles from pickup to delivery", ar: "المسافة بالأميال من الاستلام إلى التسليم" },
  step2Title: { en: "Get Instant Quote", ar: "احصل على عرض فوري" },
  step2Desc: { en: "5 SAR per mile, simple and clear", ar: "٥ ريال لكل ميل، بسيط وواضح" },
  step3Title: { en: "Book Your Delivery", ar: "احجز توصيلتك" },
  step3Desc: { en: "Proceed to full quote form", ar: "انتقل إلى نموذج طلب العرض" },
  
  // Full Calculator
  fullCostCalculator: { en: "Cost Calculator", ar: "حاسبة التكلفة" },
  detailedBreakdown: { en: "5 SAR per mile pricing", ar: "٥ ريال لكل ميل" },
  enterDistanceToSee: { en: "Enter distance to see total cost", ar: "أدخل المسافة لمعرفة التكلفة الإجمالية" },
  currentRate: { en: "Rate: 5 SAR per mile", ar: "السعر: ٥ ريال لكل ميل" },
  estimateNote: { en: "* Final price may vary based on actual route. This is an estimate.", ar: "* قد يختلف السعر النهائي بناءً على المسار الفعلي. هذا تقدير." },
  
  // Services
  ourServices: { en: "Our Services", ar: "خدماتنا" },
  servicesSubtitle: { en: "Comprehensive logistics solutions tailored for your business", ar: "حلول لوجستية شاملة مصممة لعملك" },
  freightShipping: { en: "Freight Shipping", ar: "الشحن البري" },
  freightDesc: { en: "Domestic shipping across Saudi Arabia with tracking", ar: "شحن محلي في جميع أنحاء المملكة مع التتبع" },
  expressDelivery: { en: "Express Delivery", ar: "التوصيل السريع" },
  expressDesc: { en: "Same-day and next-day delivery options", ar: "خيارات التوصيل في نفس اليوم واليوم التالي" },
  warehousing: { en: "Warehousing", ar: "التخزين" },
  warehousingDesc: { en: "Secure storage solutions in major cities", ar: "حلول تخزين آمنة في المدن الرئيسية" },
  customClearance: { en: "Custom Clearance", ar: "التخليص الجمركي" },
  customDesc: { en: "Import/export documentation handling", ar: "معالجة وثائق الاستيراد والتصدير" },
  
  // Why Choose Us
  whyChooseUs: { en: "Why Choose Us", ar: "لماذا تختارنا" },
  whySubtitle: { en: "Trusted by businesses across Saudi Arabia", ar: "موثوق من قبل الشركات في جميع أنحاء المملكة" },
  reliableService: { en: "Reliable Service", ar: "خدمة موثوقة" },
  reliableDesc: { en: "On-time delivery guaranteed", ar: "توصيل في الوقت المحدد مضمون" },
  coverage: { en: "Nationwide Coverage", ar: "تغطية وطنية" },
  coverageDesc: { en: "All major Saudi cities", ar: "جميع المدن السعودية الرئيسية" },
  support: { en: "24/7 Support", ar: "دعم على مدار الساعة" },
  supportDesc: { en: "Always here to help", ar: "دائماً هنا للمساعدة" },
  
  // CTA Banner
  readyToShip: { en: "Ready to Ship?", ar: "جاهز للشحن؟" },
  ctaDescription: { en: "Get your free quote today and experience seamless logistics.", ar: "احصل على عرض سعر مجاني اليوم واستمتع بخدمات لوجستية سلسة." },
  requestQuote: { en: "Request a Quote", ar: "اطلب عرض سعر" },
  callUs: { en: "Call Us", ar: "اتصل بنا" },
  
  // Footer
  footerDesc: { en: "Professional logistics and shipping services across Saudi Arabia.", ar: "خدمات لوجستية وشحن احترافية في جميع أنحاء المملكة العربية السعودية." },
  quickLinks: { en: "Quick Links", ar: "روابط سريعة" },
  contactInfo: { en: "Contact Info", ar: "معلومات الاتصال" },
  allRightsReserved: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  
  // Contact Page
  getInTouch: { en: "Get in Touch", ar: "تواصل معنا" },
  contactSubtitle: { en: "We're here to help with your logistics needs", ar: "نحن هنا للمساعدة في احتياجاتك اللوجستية" },
  address: { en: "Address", ar: "العنوان" },
  phone: { en: "Phone", ar: "الهاتف" },
  email: { en: "Email", ar: "البريد الإلكتروني" },
  businessHours: { en: "Business Hours", ar: "ساعات العمل" },
  
  // Quote Form
  requestQuoteTitle: { en: "Request a Quote", ar: "طلب عرض سعر" },
  quoteSubtitle: { en: "Fill out the form and we'll get back to you shortly", ar: "املأ النموذج وسنتواصل معك قريباً" },
  yourDetails: { en: "Your Details", ar: "بياناتك" },
  fullName: { en: "Full Name", ar: "الاسم الكامل" },
  companyName: { en: "Company Name (optional)", ar: "اسم الشركة (اختياري)" },
  phoneNumber: { en: "Phone Number", ar: "رقم الهاتف" },
  emailAddress: { en: "Email Address", ar: "البريد الإلكتروني" },
  shipmentDetails: { en: "Shipment Details", ar: "تفاصيل الشحنة" },
  pickupAddress: { en: "Pickup Address", ar: "عنوان الاستلام" },
  deliveryAddress: { en: "Delivery Address", ar: "عنوان التسليم" },
  description: { en: "Description / Special Instructions", ar: "الوصف / تعليمات خاصة" },
  submitQuote: { en: "Submit Quote Request", ar: "إرسال طلب العرض" },
  sendViaWhatsApp: { en: "Send via WhatsApp", ar: "إرسال عبر واتساب" },
  sendViaEmail: { en: "Send via Email", ar: "إرسال عبر البريد" },
  sendViaTelegram: { en: "Send via Telegram", ar: "إرسال عبر تيليجرام" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
