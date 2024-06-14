import React from "react";
import { Spotlight } from "./ui/SpotLight";
import TypeWriter from "./TypeWriter";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import ButtonShine from "./ui/ButtonShine";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" pb-20 pt-36">
      {/* <ModeToggle/> */}
      <div>
        <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen " fill="white" />
        <Spotlight className=" top-10 left-full h-[80vh] w-[50vw] " fill="purple" />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw]  " fill="blue" />
        <Spotlight className=" top-28 -right-80 h-[80vh] w-[50vw] " fill='rgb(203 172 249)' />
      </div>
      <div className="h-full w-full dark:bg-black-100 bg-white   dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute top-0 left-0  flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex md:flex-row md:gap-1 gap-2  flex-col-reverse items-center md:items-start justify-center relative md:my-20 z-10">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <p className=" text-center  md:tracking-wider text-sm md:text-xl lg:text-3xl ">
            Hi , I&apos;m <span className="text-violet-600 font-semibold">Noor Hesham</span>, based in Egypt.
          </p>
          <TextGenerateEffect
            className=" text-center text-[40px] z-10 md:text-5xl lg:text-6xl"
            words={"The friendly neighborhood MERN Stack Developer with Next.js. 🕸️"}
          />
          <TypeWriter words={["MongoDB", "Express.js", "React", "Node.js"]} />
        <div className="flex flex-col md:flex-row items-center px-5  gap-5">
        <a className=" mt-1 text-nowrap " href="#about">
            <MagicButton icon={<FaLocationArrow/>} text="Show My Work" />
          </a>

          <a className=" mt-auto text-nowrap" href="/cv.pdf" download="cv">
            {" "}
            <ButtonShine text={'Download my cv'} />
          </a>
        </div>
        </div>
      <div className=" relative z-10">
        <div className=" w-80 h-80 relative z-10  rounded-full ">
        <Image fill src="/noor.png" alt="" className=" rounded-full bg-black scale-90 object-contain  absolute "/> 
        </div>
        <img  src="/purple.png" alt="" className=" z-0 scale-125  lg:scale-150 absolute left-5 lg:left-[35px] top-8  lg:top-5 object-contain   "/> 
      </div>
      </div>
    </div>
  );
};

export default Hero;
