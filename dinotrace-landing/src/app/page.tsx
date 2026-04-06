import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import ProductConcept from "@/components/ProductConcept";
import ProductDemo from "@/components/ProductDemo";
import CrewsShowcase from "@/components/CrewsShowcase";
import Credibility from "@/components/Credibility";
import EarlyAccessCTA from "@/components/EarlyAccessCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <ProductConcept />
        <ProductDemo />
        <CrewsShowcase />
        <Credibility />
        <EarlyAccessCTA />
      </main>
      <Footer />
    </>
  );
}
