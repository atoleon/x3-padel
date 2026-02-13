import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Tournaments from "@/components/Tournaments";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Tournaments />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollAnimator />
    </>
  );
}
