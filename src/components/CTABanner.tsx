import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight, Send } from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { CONTACT, getWhatsAppLink, getTelegramLink } from "@/config/contact";

const CTABanner = () => {
  const { translations: t, currentLanguage } = useAppSelector((state) => state.language);

  const message = currentLanguage === 'ar'
    ? 'مرحباً، أرغب في الحصول على عرض سعر لخدمة التوصيل.'
    : 'Hi, I would like to get a quote for delivery service.';

  return (
    <section className="py-16 md:py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-2 border-primary-foreground" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-2 border-primary-foreground" />
      </div>

      <div className="container relative">
        <div className="text-center text-primary-foreground space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.cta.readyToShip}
          </h2>
          <p className="text-lg text-primary-foreground/90">
            {t.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href={getWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto gap-2">
                <MessageCircle className="h-5 w-5" />
                {t.common.whatsapp}
              </Button>
            </a>
            <a 
              href={getTelegramLink(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="telegram" size="xl" className="w-full sm:w-auto gap-2">
                <Send className="h-5 w-5" />
                {t.common.telegram}
              </Button>
            </a>
            <a href={`tel:${CONTACT.phone}`}>
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                {t.cta.callUs}
              </Button>
            </a>
            <Link to="/quote">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                {t.cta.requestQuote}
                <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-primary-foreground/70 pt-4">
            Talha Babar • {CONTACT.phoneDisplay} • {t.footer.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
