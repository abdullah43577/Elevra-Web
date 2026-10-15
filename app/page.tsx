import { DownloadSection } from "./_components/download-section";
import { FaqSection } from "./_components/faq-section";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { JourneySection } from "./_components/journey-section";
import { PlansSection } from "./_components/plans-section";
import { PrinciplesSection } from "./_components/principles-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <JourneySection />
        <PrinciplesSection />
        <PlansSection />
        <FaqSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
