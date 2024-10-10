import Image from "next/image";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import LetsDesign from "./LetsDesign/LetsDesign";

export default function Home() {
  return (
    <div className="px-[3%] lg:px-[10%] lg:w-auto">
      <Banner />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <LetsDesign />
    </div>
  );
}
