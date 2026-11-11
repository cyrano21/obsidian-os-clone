import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import Showcase from "@/components/site/showcase";
import Offerings from "@/components/site/offerings";
import { FirmsSection, ConsolidatorsSection } from "@/components/site/audiences";
import Security from "@/components/site/security";
import Footer from "@/components/site/footer";
import Reveal from "@/components/site/reveal";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Showcase />
      <Offerings />
      <FirmsSection />
      <ConsolidatorsSection />
      <Security />
      <Footer />
    </main>
  );
}
