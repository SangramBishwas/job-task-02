import Image from "next/image";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";

export default function Home() {
  return (
    <div className="px-[3%] lg:px-[10%] lg:w-auto">
      <Banner />
      <Banner />
      <About />
      <Services />
      <Projects />
    </div>
  );
}
