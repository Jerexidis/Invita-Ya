import Navbar from './components/landing/Navbar';
import HeroSection from './components/landing/HeroSection';
import BenefitsSection from './components/landing/BenefitsSection';
import HowItWorksSection from './components/landing/HowItWorksSection';
import GallerySection from './components/landing/GallerySection';
import RsvpShowcaseSection from './components/landing/RsvpShowcaseSection';
import RealEventsSection from './components/landing/RealEventsSection';
import PricingSection from './components/landing/PricingSection';
import TestimonialsSection from './components/landing/TestimonialsSection';
import ContactSection from './components/landing/ContactSection';
import Footer from './components/landing/Footer';
import WhatsAppFAB from './components/ui/WhatsAppFAB';

const LandingPageContent = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-white font-sans text-invita-text">
            <Navbar />
            <HeroSection />
            <BenefitsSection />
            <HowItWorksSection />
            <GallerySection />
            <RealEventsSection />
            <RsvpShowcaseSection />
            <PricingSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
            <WhatsAppFAB />
        </div>
    );
};

export default LandingPageContent;
