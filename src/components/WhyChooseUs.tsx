import { Clock, Shield, Truck, Headphones, MapPin, CreditCard } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for all your urgent delivery needs",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All shipments covered with comprehensive insurance",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Express options for time-sensitive deliveries",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal assistance via WhatsApp, call, or email",
  },
  {
    icon: MapPin,
    title: "City-Wide Coverage",
    description: "Serving all neighborhoods across Riyadh",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden fees, pay only what you see",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why BLC?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-secondary">500+</span> Customers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with Babar Logistics — where reliability meets affordability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
