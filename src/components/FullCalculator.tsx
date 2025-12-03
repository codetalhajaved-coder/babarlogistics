import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RATE_PER_MILE = 5; // SAR per mile

const FullCalculator = () => {
  const [distance, setDistance] = useState("");
  const { t } = useLanguage();

  const calculateTotal = () => {
    const miles = parseFloat(distance) || 0;
    return (miles * RATE_PER_MILE).toFixed(2);
  };

  const total = calculateTotal();
  const hasInput = parseFloat(distance) > 0;

  return (
    <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 max-w-xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-lg gradient-hero flex items-center justify-center">
          <Calculator className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{t("fullCostCalculator")}</h2>
          <p className="text-sm text-muted-foreground">{t("detailedBreakdown")}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Distance Input */}
        <div>
          <Label htmlFor="calc-distance" className="text-base font-medium">{t("distance")}</Label>
          <Input
            id="calc-distance"
            type="number"
            placeholder={t("enterDistance")}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="mt-2 text-xl h-14"
            min="0"
          />
        </div>

        {/* Results */}
        <div className="bg-muted rounded-xl p-6">
          {hasInput ? (
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("distance")}</span>
                <span className="font-medium">{distance} miles</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("currentRate")}</span>
                <span className="font-medium">× 5</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="font-bold text-lg">{t("total")}</span>
                <span className="font-bold text-3xl text-primary">{total} SAR</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calculator className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>{t("enterDistanceToSee")}</p>
            </div>
          )}
        </div>

        {hasInput && (
          <div className="space-y-3">
            <Link to="/quote" className="block">
              <Button variant="hero" className="w-full gap-2 h-12">
                {t("proceedToQuote")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
            </Link>
            <a 
              href={`https://wa.me/966539662194?text=${encodeURIComponent(`Hi, I calculated a delivery cost of ${total} SAR for ${distance} miles. Can you confirm this quote?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="whatsapp" className="w-full gap-2 h-12">
                {t("confirmWhatsApp")}
              </Button>
            </a>
          </div>
        )}

        {/* Rate Info */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-center font-medium text-primary">
            {t("currentRate")}
          </p>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {t("estimateNote")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullCalculator;
