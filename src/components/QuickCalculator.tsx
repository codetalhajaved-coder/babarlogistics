import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ArrowRight } from "lucide-react";

const RATE_PER_KG = 5; // SAR per kg
const RATE_PER_METER = 15; // SAR per meter
const BASE_FEE = 20; // Base delivery fee
const VAT_RATE = 0.15; // 15% VAT

const QuickCalculator = () => {
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" });
  const [serviceType, setServiceType] = useState("standard");
  
  const calculateTotal = () => {
    const weightNum = parseFloat(weight) || 0;
    const length = parseFloat(dimensions.length) || 0;
    const width = parseFloat(dimensions.width) || 0;
    const height = parseFloat(dimensions.height) || 0;
    
    // Calculate volumetric weight (length * width * height in meters)
    const volumetricMeters = length * width * height;
    
    // Cost calculation
    const weightCost = weightNum * RATE_PER_KG;
    const volumeCost = volumetricMeters * RATE_PER_METER * 100; // Multiply by 100 for reasonable pricing
    
    // Use the greater of weight or volume-based cost
    const shippingCost = Math.max(weightCost, volumeCost);
    
    // Service multiplier
    const multiplier = serviceType === "express" ? 1.5 : serviceType === "same-day" ? 2 : 1;
    
    const subtotal = BASE_FEE + (shippingCost * multiplier);
    const vat = subtotal * VAT_RATE;
    const total = subtotal + vat;
    
    return {
      subtotal: subtotal.toFixed(2),
      vat: vat.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const costs = calculateTotal();
  const hasInput = weight || dimensions.length || dimensions.width || dimensions.height;

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Form */}
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg gradient-hero flex items-center justify-center">
                <Calculator className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Quick Cost Estimate</h3>
                <p className="text-sm text-muted-foreground">Get instant pricing in SAR</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Weight */}
              <div>
                <Label htmlFor="weight" className="text-sm font-medium">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* Dimensions */}
              <div>
                <Label className="text-sm font-medium">Dimensions (meters)</Label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <Input
                    type="number"
                    placeholder="L"
                    value={dimensions.length}
                    onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                  />
                  <Input
                    type="number"
                    placeholder="W"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                  />
                  <Input
                    type="number"
                    placeholder="H"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <Label className="text-sm font-medium">Service Type</Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (1-2 days)</SelectItem>
                    <SelectItem value="express">Express (+50%)</SelectItem>
                    <SelectItem value="same-day">Same Day (×2)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results */}
              {hasInput && (
                <div className="bg-muted rounded-lg p-4 space-y-2 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{costs.subtotal} SAR</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">VAT (15%)</span>
                    <span className="font-medium">{costs.vat} SAR</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-primary text-lg">{costs.total} SAR</span>
                  </div>
                </div>
              )}

              <Link to="/calculator" className="block pt-2">
                <Button variant="default" className="w-full gap-2">
                  Full Calculator
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Know Your Costs <span className="text-primary">Upfront</span>
            </h2>
            <p className="text-muted-foreground">
              No hidden fees, no surprises. Our transparent pricing lets you calculate exact delivery costs before booking.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Enter Shipment Details</h4>
                  <p className="text-sm text-muted-foreground">Weight, dimensions, and service type</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Get Instant Quote</h4>
                  <p className="text-sm text-muted-foreground">See breakdown with VAT included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Book Your Delivery</h4>
                  <p className="text-sm text-muted-foreground">Proceed to full quote form</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCalculator;
