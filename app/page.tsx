import Navbar from "./components/layout/Navbar";
import Hero from "./components/ui/Hero";
import CategoryCard from "./components/ui/Categorycard";
import WhyChoose from "./components/ui/WhyChoose";
import Stats from "./components/ui/Stats";
import ToolCard from "./components/ui/Toolcard";
import Footer from "./components/layout/Footer";
import FAQ from "./components/ui/Faq";
import CTA from "./components/ui/CTA"; 
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCard />
      <WhyChoose />
      <Stats />
      <ToolCard />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
