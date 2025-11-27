import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-2 border-primary-foreground" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-2 border-primary-foreground" />
      </div>

      <div className="container relative">
        <div className="text-center text-primary-foreground space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Ship? Get Your <span className="text-secondary">Free Quote</span> Now!
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Contact us via your preferred channel — WhatsApp, call, or email. We respond within minutes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://wa.me/966539662194?text=Hi%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20delivery%20service."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+966539662194">
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
            <Link to="/quote">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                Online Form
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-primary-foreground/70 pt-4">
            Talha Babar • +966 53 966 2194 • Riyadh, Saudi Arabia
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
