import Navbar from "./components/layout/Navbar";
import Hero from "./components/ui/Hero";
import CategoryCard from "./components/ui/Categorycard";
import ToolCard from "./components/ui/Toolcard";
import WhyChoose from "./components/ui/WhyChoose";
import Stats from "./components/ui/Stats";
import CTA from "./components/ui/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCard />
      <ToolCard />
      <WhyChoose />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}