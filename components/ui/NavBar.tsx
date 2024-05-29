"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HambugerMenu } from "../HamburgerMenu";
import MenuSvg from "../MenuSvg";
import Button from "../ButtonColorful";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Image from "next/image";

const container = {
  hidden: { opacity: 1, scale: 0 },
  exit: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [openNavigation, setOpenNavigation] = useState(false);

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation || !(window.innerWidth <= 1024)) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          " hidden lg:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative lg:flex dark:text-neutral-50 items-center   hidden space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
      <AnimatePresence>
        {openNavigation && (
          <motion.nav
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${
              openNavigation ? "flex" : "hidden"
            }  fixed top-0  left-0 bottom-0 z-40 right-0 bg-black-200 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className=" relative z-50 flex flex-col items-center justify-center m-auto lg:flex-row">
            <div className=" mx-auto relative text-center w-52 h-52 ">
              <img src="/icon.png" className=" absolute object-cover" alt="" />
            </div>
              {navItems.map((link) => (
                <motion.a
                  variants={item}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase  text-gray-100 transition-colors hover:text-gray-200
             lg:hidden px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                     
                     lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  href={link.link}
                  key={link.link}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <HambugerMenu />
          </motion.nav>
        )}
      </AnimatePresence>
      <Button className="ml-auto fixed top-3 z-50 lg:hidden" onClick={toggleNavigation}>
        <MenuSvg openNavigation={openNavigation} />
      </Button>
    </>
  );
};
