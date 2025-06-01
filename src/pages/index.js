import Image from "next/image";
import Hero from "../../component/Hero";
import About from "../../component/About";
import Skills from "../../component/Skills";
import Contact from "../../component/Contact";
import Projects from "../../component/Projects";
import Navbar from "../../component/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <Skills/>
      <Contact/>
      <Projects/>

    </div>
  );
}
