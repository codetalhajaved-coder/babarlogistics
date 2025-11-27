import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with the message
    const message = encodeURIComponent(
      `Contact Form Message:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/966539662194?text=${message}`, "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Your message will be sent via WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions? Need a quote? Get in touch with our team. 
              We're here to help 24/7.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/966539662194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-all group"
                    >
                      <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">WhatsApp</p>
                        <p className="text-muted-foreground">+966 53 966 2194</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+966539662194"
                      className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-all group"
                    >
                      <div className="h-12 w-12 rounded-full gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground">+966 53 966 2194</p>
                      </div>
                    </a>

                    <a 
                      href="mailto:info@babarlogistics.com"
                      className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-all group"
                    >
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">info@babarlogistics.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card">
                      <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">Riyadh, Saudi Arabia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-card rounded-xl shadow-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Saturday - Thursday</span>
                      <span className="font-medium">8:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Friday</span>
                      <span className="font-medium">2:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Emergency/Urgent</span>
                      <span className="font-medium text-secondary">24/7 Available</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-card rounded-xl shadow-card overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.0215828822!2d46.54232195!3d24.72540455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BLC Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5XX XXX XXXX"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your message will be sent directly to our WhatsApp for fastest response.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Manager Info */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="bg-card rounded-2xl shadow-card p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-2">Talha Babar</h3>
              <p className="text-muted-foreground mb-4">Manager - Babar Logistic Company</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/966539662194" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:+966539662194">
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
