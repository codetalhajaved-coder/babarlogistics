import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuickCalculator from "@/components/QuickCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <QuickCalculator />
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
