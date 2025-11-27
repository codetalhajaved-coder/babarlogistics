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

const services = [
  { icon: FileText, label: "Documents", description: "Secure document delivery" },
  { icon: Package, label: "Parcels", description: "Package delivery" },
  { icon: GraduationCap, label: "School Pick-up", description: "Safe student transport" },
  { icon: Gift, label: "Gifts", description: "Special gift delivery" },
  { icon: Flower2, label: "Flowers", description: "Fresh flower delivery" },
  { icon: Key, label: "Keys", description: "Key handover service" },
  { icon: Mail, label: "Letters", description: "Invitation & mail" },
  { icon: Heart, label: "Wedding Cards", description: "Wedding invitations" },
  { icon: Zap, label: "Chargers", description: "Electronics delivery" },
  { icon: Droplet, label: "Water", description: "Water bottle delivery" },
  { icon: Utensils, label: "Food Delivery", description: "Hot & cold food" },
  { icon: Box, label: "Boxes", description: "Bulk & box items" },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything at Your <span className="text-primary">Doorstep</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From documents to parcels, school pick-ups to special deliveries — we handle it all with care and speed.
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
