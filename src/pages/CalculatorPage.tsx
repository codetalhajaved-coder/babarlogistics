import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullCalculator from "@/components/FullCalculator";
import { useAppSelector } from "@/hooks/useAppSelector";

const CalculatorPage = () => {
  const { translations: t } = useAppSelector((state) => state.language);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted py-8 md:py-12">
        <div className="container">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              {t.nav.calculator}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.calculator.pageTitle} <span className="text-primary">{t.calculator.pageTitleHighlight}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.calculator.pageDescription}
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
