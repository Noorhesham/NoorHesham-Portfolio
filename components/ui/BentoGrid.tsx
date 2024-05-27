"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import { tech } from "@/data";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/conffite.json";
import {motion} from 'framer-motion'
export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  text,
  icon,
  id,
  imgClassName,
  titleClassName,
  spareImg,
  img,
}: {
  className?: string;
  text?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const lottieRef = useRef<any>(null);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (copied || copied2) {
      const animationInstance = lottieRef.current?.getLottie?.();
      animationInstance?.goToAndPlay(0, true);
    }
  }, [copied, copied2]);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  };
  const handleCopy2 = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied2(true);
    setTimeout(() => {
      setCopied2(false)
    }, 1000);
  };
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} 
    whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} 
    transition={{stiffness:.3,duration:1,}}
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: " rgb(24,20,42)",
        backgroundColor: "linear-gradient(90deg, rgba(24,20,42,1) 14%, rgba(62,31,73,1) 59%, rgba(54,14,76,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <div className="flex flex-col items-center justify-center px-5 py-3">
              <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center ")} />
              <div className="">
                <p className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">{text}</p>
              </div>
            </div>
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>{title}</div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}

          {id == 3 && (
            <div className="flex gap-1 mt-5 lg:gap-5">
              <div className="flex mt-5 flex-row mx-auto gap-3">
                {tech.map((item, i) => (
                  <div
                    className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-12 h-12 first:translate-y-3 even:-translate-y-3 odd:translate-y-4 last:translate-y-6"
                    key={i}
                  >
                    <img className="object-cover" src={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied||copied2 ? "block" : "block"}`}>
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie
                  ref={lottieRef}
                  options={defaultOptions}
                  height={200}
                  width={400}
                />          </div>

              <MagicButton
                text={copied ? "Email is Copied!" : "Copy my email address"}
                icon={!copied&&<IoCopyOutline />}
                position="left"
                handleClick={() => handleCopy("noordragon2004@gmail.com")}
                className="!bg-[#161A31]"
              />
              <MagicButton
                text={copied2 ? "Phone Number is Copied!" : "Copy my Phone Number"}
                icon={!copied2&&<IoCopyOutline />}
                position="left"
                handleClick={() => handleCopy2("+201145838187")}
                className="!bg-[#161A31] md:w-full text-nowrap"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
