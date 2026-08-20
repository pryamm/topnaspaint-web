import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMetricsSection } from '@/components/sections/TrustMetricsSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { ProductCatalog } from '@/components/sections/ProductCatalog';
import { ColorSimulatorCTA } from '@/components/sections/ColorSimulatorCTA';
import { PartnershipBenefitsSection } from '@/components/sections/PartnershipBenefitsSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PartnershipProcessSection } from '@/components/sections/PartnershipProcessSection';
import { MapSection } from '@/components/sections/MapSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0 relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustMetricsSection />
      <TechnologySection />
      <ProductCatalog limit={4} />
      <ColorSimulatorCTA />
      <PartnershipBenefitsSection />
      <TestimonialSection />
      <ProjectsSection />
      <PartnershipProcessSection />
      <MapSection />
      <FAQSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Topnas Paint. All rights reserved.</p>
      </footer>
    </main>
  );
}
