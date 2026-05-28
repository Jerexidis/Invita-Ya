import Navbar from './components/landing/Navbar';
import HeroSection from './components/landing/HeroSection';
import BenefitsSection from './components/landing/BenefitsSection';
import HowItWorksSection from './components/landing/HowItWorksSection';
import GallerySection from './components/landing/GallerySection';
import PricingSection from './components/landing/PricingSection';
import TestimonialsSection from './components/landing/TestimonialsSection';
import ContactSection from './components/landing/ContactSection';
import Footer from './components/landing/Footer';
import WhatsAppFAB from './components/ui/WhatsAppFAB';
import HotSaleBanner from './components/landing/HotSaleBanner';

const LandingPageContent = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-invita-text">
            <HotSaleBanner />
            <Navbar />
            <HeroSection />
            <BenefitsSection />
            <HowItWorksSection />
            <GallerySection />
            <PricingSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
            <WhatsAppFAB />
        </div>
    );
};

export default LandingPageContent;
