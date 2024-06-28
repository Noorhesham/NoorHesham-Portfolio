"use client";
import dynamic from "next/dynamic";
import useIsMobile from "@/app/hooks/IsPhone";
import React from "react";
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
import CodeHighlighter from "./CodeHighlighter";
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
import { TracingBeam } from "./ui/Beam";
const LampDemo = dynamic(() => import("@/components/WaveyBg").then((mod) => mod.LampDemo), { ssr: false });

const PhoneCheck = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile ? (
        <>
          <TracingBeam>
            <CodeHighlighter />
            <Grid />
            <Projects />
          </TracingBeam>
          <LampDemo />
        </>
      ) : (
        <>
          <CodeHighlighter />
          <Grid />
          <Projects />
        </>
      )}
    </>
  );
};

export default PhoneCheck;
