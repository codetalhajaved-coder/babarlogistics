import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullCalculator from "@/components/FullCalculator";
import { useLanguage } from "@/contexts/LanguageContext";

const CalculatorPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted py-8 md:py-12">
        <div className="container">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              {t("calculator")}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "ar" ? "احسب" : "Calculate Your"} <span className="text-primary">{language === "ar" ? "تكلفة التوصيل" : "Delivery Cost"}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "ar" 
                ? "احصل على عرض سعر فوري وشفاف. ٥ ريال لكل ميل - بسيط وواضح."
                : "Get an instant, transparent quote. 5 SAR per mile - simple and clear."}
            </p>
          </div>
          <FullCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
