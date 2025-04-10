import { CtaSection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
// import { Footer } from "@/components/footer";

export default function LandingPage() {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CtaSection />
            {/* <Footer /> */}
        </div>
    );
}
