import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Truck className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{language === "ar" ? "بابر لوجستيك" : "Babar Logistics"}</h3>
                <p className="text-xs text-primary-foreground/70">{language === "ar" ? "شركة BLC" : "BLC Company"}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t("footerDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors">{t("home")}</Link></li>
              <li><Link to="/calculator" className="hover:text-secondary transition-colors">{t("calculator")}</Link></li>
              <li><Link to="/quote" className="hover:text-secondary transition-colors">{t("quote")}</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">{t("services")}</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t("services")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{language === "ar" ? "توصيل المستندات" : "Document Delivery"}</li>
              <li>{language === "ar" ? "توصيل الطرود والحزم" : "Parcel & Package Delivery"}</li>
              <li>{language === "ar" ? "استلام وتوصيل المدارس" : "School Pick & Drop"}</li>
              <li>{language === "ar" ? "النقل الشخصي" : "Personal Transportation"}</li>
              <li>{language === "ar" ? "توصيل سريع نفس اليوم" : "Same-Day Express"}</li>
              <li>{language === "ar" ? "حلول الشركات" : "Corporate Solutions"}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">{t("contactInfo")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+966539662194" className="hover:text-secondary transition-colors">
                  +966 53 966 2194
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <a 
                  href="https://wa.me/966539662194" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:info@babarlogistics.com" className="hover:text-secondary transition-colors">
                  info@babarlogistics.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  {language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} {language === "ar" ? "شركة بابر لوجستيك (BLC)." : "Babar Logistic Company (BLC)."} {t("allRightsReserved")}
          </p>
          <p className="text-sm text-primary-foreground/70">
            {language === "ar" ? "نخدم الرياض وجميع أنحاء المملكة العربية السعودية" : "Serving Riyadh & across Saudi Arabia"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
