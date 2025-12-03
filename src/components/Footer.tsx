import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { CONTACT, getWhatsAppLink, getTelegramLink } from "@/config/contact";

const Footer = () => {
  const { translations: t } = useAppSelector((state) => state.language);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Truck className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.footer.companyName}</h3>
                <p className="text-xs text-primary-foreground/70">{t.footer.companyTag}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/calculator" className="hover:text-secondary transition-colors">{t.nav.calculator}</Link></li>
              <li><Link to="/quote" className="hover:text-secondary transition-colors">{t.nav.quote}</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t.nav.services}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t.services.documentDelivery}</li>
              <li>{t.services.parcelDelivery}</li>
              <li>{t.services.schoolPickDrop}</li>
              <li>{t.services.personalTransport}</li>
              <li>{t.services.sameDayExpress}</li>
              <li>{t.services.corporateSolutions}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-secondary transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {t.common.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Send className="h-4 w-4 text-secondary" />
                <a 
                  href={getTelegramLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {t.common.telegram}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-secondary transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  {t.footer.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} {t.footer.companyName} (BLC). {t.footer.allRightsReserved}
          </p>
          <p className="text-sm text-primary-foreground/70">
            {t.footer.servingArea}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
