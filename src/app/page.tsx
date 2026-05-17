import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { ProductsSection } from "@/components/site/products-section";
import { ServicesSection } from "@/components/site/services-section";
import { WhyChooseSection } from "@/components/site/why-choose-section";

export default function Home() {
  return (
    <main className="pb-6">
      <Header />
      <HeroSection />
      <div className="space-y-6 pb-6">
        <ServicesSection />
        <ProductsSection />
        <WhyChooseSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
