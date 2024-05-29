import Approach from "@/components/Approach";
import ButtonGradient from "@/components/ButtonGradient";
import Clients from "@/components/Clients";
import CodeHighlighter from "@/components/CodeHighlighter";
import Contact from "@/components/Contact";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { TracingBeam } from "@/components/ui/Beam";
import { FloatingNav } from "@/components/ui/NavBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center overflow-clip  bg-black-100 items-center flex-col  mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems} />
      <div className=" lg:block hidden fixed w-32 h-32  top-2 right-10 z-50">
        <img src="/logo.png" className=" absolute object-cover" alt="" />
      </div>
      <ContactMe />
      <div className=" max-w-7xl w-full">
        <TracingBeam>
          <Hero />
          <CodeHighlighter />
          <Grid />
          <Projects />
        </TracingBeam>
        <Clients />
        <Approach />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </main>
  );
}
