import ScrollProgress from "@/components/ui/ScrollProgress";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Products from "@/components/sections/Products";
import Architecture from "@/components/sections/Architecture";
import SolarDesign from "@/components/sections/SolarDesign";
import WhyBoth from "@/components/sections/WhyBoth";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import VideoGallery from "@/components/sections/VideoGallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <TrustStrip />
        <Products />
        <Architecture />
        <SolarDesign />
        <WhyBoth />
        <Process />
        <Projects />
        <VideoGallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
