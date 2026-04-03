import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MenuSection from "@/components/MenuSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <FeaturesSection />
    <MenuSection />
    <HowItWorksSection />
    <StatsSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
