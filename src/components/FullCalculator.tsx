import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, ArrowRight, Send } from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getWhatsAppLink, getTelegramLink } from "@/config/contact";

const RATE_PER_MILE = 5;

const FullCalculator = () => {
  const [distance, setDistance] = useState("");
  const { translations: t, currentLanguage } = useAppSelector((state) => state.language);

  const calculateTotal = () => {
    const miles = parseFloat(distance) || 0;
    return (miles * RATE_PER_MILE).toFixed(2);
  };

  const total = calculateTotal();
  const hasInput = parseFloat(distance) > 0;

  const getMessage = () => {
    return currentLanguage === 'ar'
      ? `مرحباً، لقد حسبت تكلفة توصيل ${total} ريال لمسافة ${distance} ميل. هل يمكنكم تأكيد هذا العرض؟`
      : `Hi, I calculated a delivery cost of ${total} SAR for ${distance} miles. Can you confirm this quote?`;
  };

  return (
    <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 max-w-xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-lg gradient-hero flex items-center justify-center">
          <Calculator className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{t.calculator.fullCostCalculator}</h2>
          <p className="text-sm text-muted-foreground">{t.calculator.detailedBreakdown}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="calc-distance" className="text-base font-medium">{t.calculator.distance}</Label>
          <Input
            id="calc-distance"
            type="number"
            placeholder={t.calculator.enterDistance}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="mt-2 text-xl h-14"
            min="0"
          />
        </div>

        <div className="bg-muted rounded-xl p-6">
          {hasInput ? (
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t.calculator.distance}</span>
                <span className="font-medium">{distance} {t.common.miles}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t.calculator.currentRate}</span>
                <span className="font-medium">× 5</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="font-bold text-lg">{t.calculator.total}</span>
                <span className="font-bold text-3xl text-primary">{total} SAR</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calculator className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>{t.calculator.enterDistanceToSee}</p>
            </div>
          )}
        </div>

        {hasInput && (
          <div className="space-y-3">
            <Link to="/quote" className="block">
              <Button variant="hero" className="w-full gap-2 h-12">
                {t.calculator.proceedToQuote}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
            </Link>
            <a 
              href={getWhatsAppLink(getMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="whatsapp" className="w-full gap-2 h-12">
                {t.calculator.confirmWhatsApp}
              </Button>
            </a>
            <a 
              href={getTelegramLink(getMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="telegram" className="w-full gap-2 h-12">
                <Send className="h-4 w-4" />
                {t.calculator.confirmTelegram}
              </Button>
            </a>
          </div>
        )}

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-center font-medium text-primary">
            {t.calculator.currentRate}
          </p>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {t.calculator.estimateNote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullCalculator;
