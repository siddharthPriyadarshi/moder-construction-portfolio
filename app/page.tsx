import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import Products from "./components/Products";
import Safety from "./components/Safety";
import Segments from "./components/Segments";
import Services from "./components/Services";
import Values from "./components/Values";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <MissionVision />
        <Services />
        <Products />
        <Segments />
        <WhyChooseUs />
        <Safety />
        <Clients />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
