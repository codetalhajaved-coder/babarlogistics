import { 
  FileText, 
  Package, 
  GraduationCap, 
  Gift, 
  Flower2, 
  Droplet,
  Key,
  Mail,
  Heart,
  Zap,
  Utensils,
  Box
} from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";

const Services = () => {
  const { currentLanguage } = useAppSelector((state) => state.language);

  const services = [
    { icon: FileText, label: currentLanguage === 'ar' ? 'مستندات' : 'Documents', description: currentLanguage === 'ar' ? 'توصيل مستندات آمن' : 'Secure document delivery' },
    { icon: Package, label: currentLanguage === 'ar' ? 'طرود' : 'Parcels', description: currentLanguage === 'ar' ? 'توصيل الطرود' : 'Package delivery' },
    { icon: GraduationCap, label: currentLanguage === 'ar' ? 'توصيل المدارس' : 'School Pick-up', description: currentLanguage === 'ar' ? 'نقل آمن للطلاب' : 'Safe student transport' },
    { icon: Gift, label: currentLanguage === 'ar' ? 'هدايا' : 'Gifts', description: currentLanguage === 'ar' ? 'توصيل هدايا خاصة' : 'Special gift delivery' },
    { icon: Flower2, label: currentLanguage === 'ar' ? 'زهور' : 'Flowers', description: currentLanguage === 'ar' ? 'توصيل زهور طازجة' : 'Fresh flower delivery' },
    { icon: Key, label: currentLanguage === 'ar' ? 'مفاتيح' : 'Keys', description: currentLanguage === 'ar' ? 'خدمة تسليم المفاتيح' : 'Key handover service' },
    { icon: Mail, label: currentLanguage === 'ar' ? 'رسائل' : 'Letters', description: currentLanguage === 'ar' ? 'دعوات وبريد' : 'Invitation & mail' },
    { icon: Heart, label: currentLanguage === 'ar' ? 'بطاقات زفاف' : 'Wedding Cards', description: currentLanguage === 'ar' ? 'دعوات الزفاف' : 'Wedding invitations' },
    { icon: Zap, label: currentLanguage === 'ar' ? 'شواحن' : 'Chargers', description: currentLanguage === 'ar' ? 'توصيل الإلكترونيات' : 'Electronics delivery' },
    { icon: Droplet, label: currentLanguage === 'ar' ? 'مياه' : 'Water', description: currentLanguage === 'ar' ? 'توصيل المياه' : 'Water bottle delivery' },
    { icon: Utensils, label: currentLanguage === 'ar' ? 'توصيل طعام' : 'Food Delivery', description: currentLanguage === 'ar' ? 'طعام ساخن وبارد' : 'Hot & cold food' },
    { icon: Box, label: currentLanguage === 'ar' ? 'صناديق' : 'Boxes', description: currentLanguage === 'ar' ? 'عناصر ضخمة وصناديق' : 'Bulk & box items' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            {currentLanguage === 'ar' ? 'خدماتنا' : 'Our Services'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {currentLanguage === 'ar' ? 'كل شيء على' : 'Everything at Your'} <span className="text-primary">{currentLanguage === 'ar' ? 'باب منزلك' : 'Doorstep'}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {currentLanguage === 'ar' 
              ? 'من المستندات إلى الطرود، توصيل المدارس إلى التوصيلات الخاصة — نتعامل مع كل شيء بعناية وسرعة.'
              : 'From documents to parcels, school pick-ups to special deliveries — we handle it all with care and speed.'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="group bg-card rounded-xl p-4 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-3 group-hover:bg-secondary transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{service.label}</h3>
              <p className="text-xs text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
