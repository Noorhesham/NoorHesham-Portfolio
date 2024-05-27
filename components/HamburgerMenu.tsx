"use client"
import {motion} from 'framer-motion'
export const Rings = () => {
  return (
    <div className="absolute z-50 top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-black-100/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-black-100/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute z-50 bg-black-200  top-0 left-5 w-0.25 h-full "></div>
      <div className="absolute z-50  bg-black-200 top-0 right-5 w-0.25 h-full "></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <motion.div
        className="absolute z-10  top-[4.4rem] left-15 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"
        animate={{
          x: [-5, 5, -5, 5, -5], // Movement in x direction
          y: [-5, -5, 5, 5, -5], // Movement in y direction
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } // Reverse animation infinitely
        }}
      ></motion.div>
      <motion.div
        className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"
        animate={{
          x: [-5, 5, -5, 5, -5],
          y: [5, 5, -5, -5, 5],
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div
        className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"
        animate={{
          x: [5, -5, 5, -5, 5],
          y: [-5, 5, -5, 5, -5],
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
      ></motion.div>
    </>
  );
};

export const HambugerMenu = () => {
  return (
    <div className="absolute z-50  inset-0 pointer-events-none block z-5 lg:hidden">
      <div className="absolute z-50 inset-0 opacity-[.03]">
        <img className="w-full h-full object-cover" src={'/background.jpg'} width={688} height={953} alt="Background" />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
