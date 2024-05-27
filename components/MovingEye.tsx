"use client";
import React, { useEffect, useRef } from "react";

const MovingEye = () => {
  const eye1Ref = useRef<any>(null);
  const eye2Ref = useRef<any>(null);

  useEffect(() => {
    const moveEyes = (e: any) => {
      const eye1 = eye1Ref.current;
      const eye2 = eye2Ref.current;
      const rect1 = eye1?.getBoundingClientRect();
      const rect2 = eye2?.getBoundingClientRect();
      const centerX1 = rect1.left + rect1.width / 2;
      const centerY1 = rect1.top + rect1.height / 2;
      const centerX2 = rect2.left + rect2.width / 2;
      const centerY2 = rect2.top + rect2.height / 2;
      const angle1 = Math.atan2(e.clientY - centerY1, e.clientX - centerX1);
      const angle2 = Math.atan2(e.clientY - centerY2, e.clientX - centerX2);
      const radius = Math.min(rect1.width, rect1.height) / 3;
      const offsetX = Math.cos(angle1) * radius;
      const offsetY = Math.sin(angle1) * radius;
      eye1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      eye2.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    document.addEventListener("mousemove", moveEyes);

    return () => {
      document.removeEventListener("mousemove", moveEyes);
    };
  }, []);    



  return (
    <div className="relative hidden md:block  z-10 w-[40rem] h-full">
      <img src="/spider.png" className="object-cover" alt="" />
      <div ref={eye1Ref} className="absolute w-[0.6rem] h-[0.5rem] z-20 lg:w-[1rem] lg:h-[0.8rem] top-[31%] left-[38.25%] bg-[#2c1912] rounded-full"></div>
      <div ref={eye2Ref} className="absolute w-[0.6rem] h-[0.5rem] z-20 lg:w-[1rem] lg:h-[0.8rem] top-[31%] right-[45.5%] bg-[#2c1912] rounded-full"></div>
     
    </div>
  );
};

export default MovingEye;
