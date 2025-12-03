import { Clock, Shield, Truck, Headphones, MapPin, CreditCard } from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";

const WhyChooseUs = () => {
  const { translations: t, currentLanguage } = useAppSelector((state) => state.language);

  const features = [
    {
      icon: Clock,
      title: currentLanguage === 'ar' ? 'متاح ٢٤/٧' : '24/7 Availability',
      description: currentLanguage === 'ar' ? 'خدمة على مدار الساعة لجميع احتياجات التوصيل العاجلة' : 'Round-the-clock service for all your urgent delivery needs',
    },
    {
      icon: Shield,
      title: currentLanguage === 'ar' ? 'مؤمن بالكامل' : 'Fully Insured',
      description: currentLanguage === 'ar' ? 'جميع الشحنات مغطاة بتأمين شامل' : 'All shipments covered with comprehensive insurance',
    },
    {
      icon: Truck,
      title: currentLanguage === 'ar' ? 'توصيل نفس اليوم' : 'Same-Day Delivery',
      description: currentLanguage === 'ar' ? 'خيارات سريعة للتوصيلات الحساسة للوقت' : 'Express options for time-sensitive deliveries',
    },
    {
      icon: Headphones,
      title: currentLanguage === 'ar' ? 'دعم مخصص' : 'Dedicated Support',
      description: currentLanguage === 'ar' ? 'مساعدة شخصية عبر واتساب أو تيليجرام أو الهاتف' : 'Personal assistance via WhatsApp, Telegram, or call',
    },
    {
      icon: MapPin,
      title: currentLanguage === 'ar' ? 'تغطية المدينة بالكامل' : 'City-Wide Coverage',
      description: currentLanguage === 'ar' ? 'نخدم جميع أحياء الرياض' : 'Serving all neighborhoods across Riyadh',
    },
    {
      icon: CreditCard,
      title: currentLanguage === 'ar' ? 'أسعار شفافة' : 'Transparent Pricing',
      description: currentLanguage === 'ar' ? 'بدون رسوم خفية، ادفع فقط ما تراه' : 'No hidden fees, pay only what you see',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t.whyChooseUs.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {currentLanguage === 'ar' ? 'موثوق من قبل' : 'Trusted by'} <span className="text-secondary">500+</span> {currentLanguage === 'ar' ? 'عميل' : 'Customers'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {currentLanguage === 'ar' 
              ? 'اختبر الفرق مع بابر لوجستيك — حيث تلتقي الموثوقية مع الأسعار المعقولة.'
              : 'Experience the difference with Babar Logistics — where reliability meets affordability.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-transparent hover:border-secondary/30"
            >
              <div className="h-14 w-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
