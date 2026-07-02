import Navbar from "./components/layout/Navbar";
import Hero from "./components/ui/Hero";
import CategoryCard from "./components/ui/Categorycard";
import ToolCard from "./components/ui/Toolcard";
import WhyChoose from "./components/ui/WhyChoose";
import Stats from "./components/ui/Stats";
import Testimonials from "./components/ui/Testimonials";
import FAQ from "./components/ui/Faq";
import CTA from "./components/ui/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolCard />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}