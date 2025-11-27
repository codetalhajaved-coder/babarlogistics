import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Truck, Clock, Shield, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Serving All Over Riyadh</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-secondary">Pick & Drop</span>
              <br />
              Delivery Service
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Fast, reliable logistics solutions for personal, school, and business needs. 
              Everything delivered to your doorstep across Riyadh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/quote">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                  <FileText className="h-5 w-5" />
                  Get Instant Quote
                </Button>
              </Link>
              <Link to="/calculator">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="w-full sm:w-auto gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Calculator className="h-5 w-5" />
                  Calculate Cost
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-5 w-5 text-secondary" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Insured Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-secondary" />
                <span>Same-Day Express</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-card p-6 max-w-sm ml-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center">
                    <Truck className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quick Delivery</h3>
                    <p className="text-sm text-muted-foreground">Anywhere in Riyadh</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Documents</span>
                    <span className="font-medium text-foreground">From 25 SAR</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Parcels</span>
                    <span className="font-medium text-foreground">From 35 SAR</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Express</span>
                    <span className="font-medium text-foreground">From 50 SAR</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
