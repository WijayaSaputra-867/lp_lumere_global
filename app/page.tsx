import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Features from "./components/Features";
import About from "./components/About";
import Sustainability from "./components/Sustainability";
import Stats from "./components/Stats";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Catalogue from "./components/Catalogue";
import Partnership from "./components/Partnership";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Collections />
      <Catalogue />
      <Partnership />
      <Features />
      <Sustainability />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
