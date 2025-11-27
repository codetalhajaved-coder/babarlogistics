import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { MessageCircle, Phone, Mail } from "lucide-react";

const QuotePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted py-8 md:py-12">
        <div className="container">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Get a Quote
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Your <span className="text-primary">Free Quote</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and receive a detailed quote within minutes. Choose your preferred contact method!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/966539662194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+966 53 966 2194</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+966539662194"
                    className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p className="text-sm text-muted-foreground">+966 53 966 2194</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@babarlogistics.com"
                    className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@babarlogistics.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Why Choose BLC?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span className="text-muted-foreground">Response within 30 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span className="text-muted-foreground">No hidden fees or charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span className="text-muted-foreground">Insured deliveries available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span className="text-muted-foreground">Same-day delivery options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span className="text-muted-foreground">Real-time tracking</span>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Thursday</span>
                    <span className="font-medium">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday</span>
                    <span className="font-medium">2:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency</span>
                    <span className="font-medium text-secondary">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;
