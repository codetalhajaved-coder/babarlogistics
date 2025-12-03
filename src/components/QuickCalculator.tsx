import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, ArrowRight } from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";

const RATE_PER_MILE = 5;

const QuickCalculator = () => {
  const [distance, setDistance] = useState("");
  const { translations: t } = useAppSelector((state) => state.language);
  
  const calculateTotal = () => {
    const miles = parseFloat(distance) || 0;
    return (miles * RATE_PER_MILE).toFixed(2);
  };

  const total = calculateTotal();
  const hasInput = parseFloat(distance) > 0;

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
                <h3 className="text-xl font-bold text-foreground">{t.calculator.quickCostEstimate}</h3>
                <p className="text-sm text-muted-foreground">{t.calculator.instantPricing}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="distance" className="text-sm font-medium">{t.calculator.distance}</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder={t.calculator.enterDistance}
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="mt-1 text-lg"
                  min="0"
                />
              </div>

              {hasInput && (
                <div className="bg-muted rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{t.calculator.total}</span>
                    <span className="font-bold text-primary text-2xl">{total} SAR</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {distance} × 5 SAR = {total} SAR
                  </p>
                </div>
              )}

              <Link to="/calculator" className="block pt-2">
                <Button variant="default" className="w-full gap-2">
                  {t.calculator.fullCalculator}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
              {t.calculator.transparentPricing}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.calculator.knowCosts} <span className="text-primary">{t.calculator.upfront}</span>
            </h2>
            <p className="text-muted-foreground">
              {t.calculator.nohiddenFees}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.calculator.step1Title}</h4>
                  <p className="text-sm text-muted-foreground">{t.calculator.step1Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.calculator.step2Title}</h4>
                  <p className="text-sm text-muted-foreground">{t.calculator.step2Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.calculator.step3Title}</h4>
                  <p className="text-sm text-muted-foreground">{t.calculator.step3Desc}</p>
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
