import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calculator, ArrowRight, Info } from "lucide-react";

// Configurable rates
const RATES = {
  perKg: 5, // SAR per kg
  perMeter: 15, // SAR per cubic meter
  baseFee: 20, // Base delivery fee
  vatRate: 0.15, // 15% VAT
  insuranceRate: 0.02, // 2% of declared value
  handlingFee: 10, // Additional handling fee
  routes: {
    "riyadh-riyadh": 1.0,
    "riyadh-jeddah": 2.5,
    "riyadh-dammam": 1.8,
    "riyadh-makkah": 2.8,
    "riyadh-madinah": 2.2,
  } as Record<string, number>,
  serviceMultipliers: {
    standard: 1.0,
    express: 1.5,
    "same-day": 2.0,
    urgent: 3.0,
  } as Record<string, number>,
};

const FullCalculator = () => {
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" });
  const [quantity, setQuantity] = useState("1");
  const [route, setRoute] = useState("riyadh-riyadh");
  const [serviceType, setServiceType] = useState("standard");
  const [declaredValue, setDeclaredValue] = useState("");
  const [includeInsurance, setIncludeInsurance] = useState(false);
  const [includeHandling, setIncludeHandling] = useState(false);

  const calculateTotal = () => {
    const weightNum = parseFloat(weight) || 0;
    const length = parseFloat(dimensions.length) || 0;
    const width = parseFloat(dimensions.width) || 0;
    const height = parseFloat(dimensions.height) || 0;
    const qty = parseInt(quantity) || 1;
    const value = parseFloat(declaredValue) || 0;

    // Calculate volumetric weight
    const volumetricMeters = length * width * height;
    
    // Cost calculation
    const weightCost = weightNum * RATES.perKg;
    const volumeCost = volumetricMeters * RATES.perMeter * 100;
    
    // Use greater of weight or volume cost
    const shippingBase = Math.max(weightCost, volumeCost) * qty;
    
    // Apply route multiplier
    const routeMultiplier = RATES.routes[route] || 1;
    const routeAdjusted = shippingBase * routeMultiplier;
    
    // Apply service multiplier
    const serviceMultiplier = RATES.serviceMultipliers[serviceType] || 1;
    const serviceAdjusted = routeAdjusted * serviceMultiplier;
    
    // Add base fee
    const withBase = serviceAdjusted + RATES.baseFee;
    
    // Optional fees
    const insurance = includeInsurance ? value * RATES.insuranceRate : 0;
    const handling = includeHandling ? RATES.handlingFee * qty : 0;
    
    const subtotal = withBase + insurance + handling;
    const vat = subtotal * RATES.vatRate;
    const total = subtotal + vat;

    return {
      shippingBase: shippingBase.toFixed(2),
      routeAdjustment: (routeAdjusted - shippingBase).toFixed(2),
      serviceAdjustment: (serviceAdjusted - routeAdjusted).toFixed(2),
      baseFee: RATES.baseFee.toFixed(2),
      insurance: insurance.toFixed(2),
      handling: handling.toFixed(2),
      subtotal: subtotal.toFixed(2),
      vat: vat.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const costs = calculateTotal();
  const hasInput = weight || dimensions.length || dimensions.width || dimensions.height;

  return (
    <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-lg gradient-hero flex items-center justify-center">
          <Calculator className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Full Cost Calculator</h2>
          <p className="text-sm text-muted-foreground">Detailed pricing breakdown in SAR</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Weight & Dimensions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Shipment Details</h3>
            <div>
              <Label htmlFor="calc-weight">Weight (kg)</Label>
              <Input
                id="calc-weight"
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Dimensions (meters)</Label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Length"
                  value={dimensions.length}
                  onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                />
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Width"
                  value={dimensions.width}
                  onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                />
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Height"
                  value={dimensions.height}
                  onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="calc-quantity">Quantity</Label>
              <Input
                id="calc-quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Route & Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Route & Service</h3>
            <div>
              <Label>Route</Label>
              <Select value={route} onValueChange={setRoute}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="riyadh-riyadh">Within Riyadh (×1.0)</SelectItem>
                  <SelectItem value="riyadh-dammam">Riyadh → Dammam (×1.8)</SelectItem>
                  <SelectItem value="riyadh-madinah">Riyadh → Madinah (×2.2)</SelectItem>
                  <SelectItem value="riyadh-jeddah">Riyadh → Jeddah (×2.5)</SelectItem>
                  <SelectItem value="riyadh-makkah">Riyadh → Makkah (×2.8)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Service Type</Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard 1-2 days (×1.0)</SelectItem>
                  <SelectItem value="express">Express next day (×1.5)</SelectItem>
                  <SelectItem value="same-day">Same Day (×2.0)</SelectItem>
                  <SelectItem value="urgent">Urgent hours (×3.0)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Optional Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Optional Services</h3>
            <div>
              <Label htmlFor="calc-value">Declared Value (SAR) - for insurance</Label>
              <Input
                id="calc-value"
                type="number"
                placeholder="Item value"
                value={declaredValue}
                onChange={(e) => setDeclaredValue(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <Label htmlFor="insurance" className="cursor-pointer">Include Insurance (2%)</Label>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <Switch
                id="insurance"
                checked={includeInsurance}
                onCheckedChange={setIncludeInsurance}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <Label htmlFor="handling" className="cursor-pointer">Special Handling (+10 SAR/item)</Label>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <Switch
                id="handling"
                checked={includeHandling}
                onCheckedChange={setIncludeHandling}
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="bg-muted rounded-xl p-6 sticky top-24">
            <h3 className="font-semibold text-foreground mb-4">Cost Breakdown</h3>
            
            {hasInput ? (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping (weight/volume)</span>
                  <span className="font-medium">{costs.shippingBase} SAR</span>
                </div>
                {parseFloat(costs.routeAdjustment) > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Route adjustment</span>
                    <span className="font-medium">+{costs.routeAdjustment} SAR</span>
                  </div>
                )}
                {parseFloat(costs.serviceAdjustment) > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service upgrade</span>
                    <span className="font-medium">+{costs.serviceAdjustment} SAR</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base delivery fee</span>
                  <span className="font-medium">{costs.baseFee} SAR</span>
                </div>
                {includeInsurance && parseFloat(costs.insurance) > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Insurance (2%)</span>
                    <span className="font-medium">{costs.insurance} SAR</span>
                  </div>
                )}
                {includeHandling && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Special handling</span>
                    <span className="font-medium">{costs.handling} SAR</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{costs.subtotal} SAR</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT (15%)</span>
                  <span className="font-medium">{costs.vat} SAR</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between items-center">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl text-primary">{costs.total} SAR</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Calculator className="h-12 w-12 mx-auto mb-3 opacity-30" />
                <p>Enter shipment details to see cost breakdown</p>
              </div>
            )}

            {hasInput && (
              <div className="mt-6 space-y-3">
                <Link to="/quote" className="block">
                  <Button variant="hero" className="w-full gap-2">
                    Proceed to Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a 
                  href={`https://wa.me/966539662194?text=${encodeURIComponent(`Hi, I calculated a delivery cost of ${costs.total} SAR. Can you confirm this quote?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="whatsapp" className="w-full gap-2">
                    Confirm via WhatsApp
                  </Button>
                </a>
              </div>
            )}

            {/* Rates Info */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <strong>Current Rates:</strong> {RATES.perKg} SAR/kg • {RATES.perMeter} SAR/m³ • Base {RATES.baseFee} SAR
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                * Final price may vary based on actual shipment details. This is an estimate only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCalculator;
