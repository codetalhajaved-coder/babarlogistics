import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Package, 
  GraduationCap, 
  Gift, 
  Flower2,
  Building2,
  Truck,
  Clock,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Document Delivery",
    description: "Secure and confidential delivery of important documents, contracts, and legal papers across Riyadh.",
    features: ["Same-day delivery", "Signature confirmation", "Tracking included"],
    price: "From 25 SAR",
  },
  {
    icon: Package,
    title: "Parcel & Package",
    description: "Reliable delivery of parcels and packages of all sizes. From small items to larger shipments.",
    features: ["Weight-based pricing", "Insurance available", "Door-to-door service"],
    price: "From 35 SAR",
  },
  {
    icon: GraduationCap,
    title: "School Pick & Drop",
    description: "Safe and punctual transportation for students. Daily or scheduled school runs across the city.",
    features: ["Verified drivers", "Real-time updates", "Monthly packages"],
    price: "Custom quote",
  },
  {
    icon: Gift,
    title: "Gift & Special Delivery",
    description: "Deliver surprises, gifts, flowers, and special items with care. Perfect for birthdays and occasions.",
    features: ["Gift wrapping", "Timed delivery", "Photo confirmation"],
    price: "From 40 SAR",
  },
  {
    icon: Building2,
    title: "Corporate Solutions",
    description: "Tailored logistics solutions for businesses. Regular pickups, bulk deliveries, and monthly accounts.",
    features: ["Dedicated account", "Volume discounts", "Priority service"],
    price: "Custom pricing",
  },
  {
    icon: Truck,
    title: "Express & Urgent",
    description: "When time is critical. Our express service ensures your shipment arrives within hours.",
    features: ["2-hour delivery", "Priority handling", "Live tracking"],
    price: "From 75 SAR",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive logistics solutions for individuals and businesses. 
              Fast, reliable, and affordable delivery across Riyadh.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl shadow-card p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-secondary/30 group"
                >
                  <div className="h-14 w-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <span className="text-secondary">✓</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-bold text-primary">{service.price}</span>
                    <Link to="/quote">
                      <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary">
                        Get Quote <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Available 24/7</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Something Delivered?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get in touch now for a free quote. We'll respond within 30 minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Request a Quote
                </Button>
              </Link>
              <a href="https://wa.me/966539662194" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
