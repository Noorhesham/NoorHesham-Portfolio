import dynamic from "next/dynamic";
import Image from "next/image";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/NavBar";
import CodeHighlighter from "@/components/CodeHighlighter";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { TracingBeam } from "@/components/ui/Beam";
import { Suspense } from "react";

const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const ButtonGradient = dynamic(() => import("@/components/ButtonGradient"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const ContactMe = dynamic(() => import("@/components/ContactMe"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Noor Hesham Portfolio",
  icons: { icon: "/noor.jpg" },
  description:
    "MERN Stack Developer specializing in React, Next.js, TypeScript, Node.js, MongoDB and Tailwind CSS. Proven track record of crafting high-performance web applications with sleek, user-friendly interfaces. Adaptable and detail-oriented, committed to delivering top-notch solutions. Passionate about staying ahead in technology and contributing to dynamic teams.",
};

export default function Home() {
  return (
    <main className="relative flex justify-center overflow-clip bg-black-100 items-center flex-col mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems} />
      <div className="lg:block hidden fixed w-32 h-32 top-2 right-10 z-50">
        <Image fill src="/logo.png" className="absolute object-cover" alt="logo" />
      </div>
      <ContactMe />
      <div className="max-w-7xl w-full">
        <Suspense>
          <Hero />
          <TracingBeam>
            <CodeHighlighter />
            <Grid />
            <Projects />
          </TracingBeam>
          <Clients />
          <Approach />
          <Experience />
          <Contact />
          <Footer />
        </Suspense>
      </div>
      <ButtonGradient />
    </main>
  );
}
