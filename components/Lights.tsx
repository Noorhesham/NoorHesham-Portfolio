"use client";
import useWindowSize from "@/app/hooks/size";
import React from "react";
import { Spotlight } from "./ui/SpotLight";

const Lights = () => {
  const size = useWindowSize();
  return (
    size.width &&
    size?.width > 600 && (
      <div className="">
        <Spotlight className="  -top-40 -left-10 md:-left-32 md:-top-20 h-screen " fill="white" />
        <Spotlight className="  top-10 left-full h-[80vh] w-[50vw] " fill="purple" />
        <Spotlight className="  top-28 left-80 h-[80vh] w-[50vw]  " fill="blue" />
        <Spotlight className="  top-28 -right-80 h-[80vh] w-[50vw] " fill="rgb(203 172 249)" />
      </div>
    )
  );
};

export default Lights;
