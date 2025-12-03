import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RATE_PER_MILE = 5; // SAR per mile

const QuickCalculator = () => {
  const [distance, setDistance] = useState("");
  const { t } = useLanguage();
  
  const calculateTotal = () => {
    const miles = parseFloat(distance) || 0;
    const total = miles * RATE_PER_MILE;
    return total.toFixed(2);
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
                <h3 className="text-xl font-bold text-foreground">{t("quickCostEstimate")}</h3>
                <p className="text-sm text-muted-foreground">{t("instantPricing")}</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Distance */}
              <div>
                <Label htmlFor="distance" className="text-sm font-medium">{t("distance")}</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder={t("enterDistance")}
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="mt-1 text-lg"
                  min="0"
                />
              </div>

              {/* Results */}
              {hasInput && (
                <div className="bg-muted rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{t("total")}</span>
                    <span className="font-bold text-primary text-2xl">{total} SAR</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {distance} × 5 SAR = {total} SAR
                  </p>
                </div>
              )}

              <Link to="/calculator" className="block pt-2">
                <Button variant="default" className="w-full gap-2">
                  {t("fullCalculator")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
              {t("transparentPricing")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("knowCosts")} <span className="text-primary">{t("upfront")}</span>
            </h2>
            <p className="text-muted-foreground">
              {t("nohiddenFees")}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("step1Title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("step1Desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("step2Title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("step2Desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("step3Title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("step3Desc")}</p>
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
