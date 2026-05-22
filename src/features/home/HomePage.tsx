import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/SiteNavbar";
import BeforeAfterSection from "./sections/BeforeAfterSection";
import ContactSection from "./sections/ContactSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import LocationSection from "./sections/LocationSection";
import PlansComparisonSection from "./sections/PlansComparisonSection";
import ServicePlansSection from "./sections/ServicePlansSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import TrustIndicatorsSection from "./sections/TrustIndicatorsSection";
import VehicleExplorerSection from "./sections/VehicleExplorerSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ServicePlansSection />
        <VehicleExplorerSection />
        <PlansComparisonSection />
        <BeforeAfterSection />
        <TrustIndicatorsSection />
        <TestimonialsSection />
        <FaqSection />
        <LocationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default HomePage;
