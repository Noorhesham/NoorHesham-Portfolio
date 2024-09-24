"use client";
import React, { ReactNode, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type SwiperType from "swiper";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Autoplay } from "swiper/modules"; // Correct import for Autoplay

const SwiperCards = ({
  items,
  className,
  slidesPerView,
  spaceBetween,
  btns,
  paginationImage,
  rounded = false,
  logo,
  samePhone,
  contain = false,
  autoplay,
  mobile,
  md,
  zoom,
  paginationImgs,
}: {
  items: any;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  btns?: boolean;
  paginationImage?: boolean;
  rounded?: boolean;
  logo?: boolean;
  samePhone?: boolean;
  contain?: boolean;
  autoplay?: boolean;
  mobile?: number;
  md?: number;
  zoom?: boolean;
  paginationImgs?: string[];
}) => {
  const [swiper, setSwiper] = React.useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [slideConfig, setSlideConfig] = React.useState({
    isBeginning: true,
    isEnd: activeIndex === (items?.length ?? 0) - 1,
  });
  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (items?.length ?? 0) - 1,
      });
    });
  }, [swiper, items]);

  return (
    <div className="relative h-full gap-3 w-full flex flex-col">
      <Swiper
        modules={[Autoplay]}
        autoplay={autoplay ? { delay: 2000 } : false}
        loop={autoplay}
        centeredSlides={false}
        initialSlide={0}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={spaceBetween || 10}
        slidesPerView={1}
        className={`w-full  h-full `}
      >
        {items?.map((src, i) => (
          <SwiperSlide className="w-full h-full" key={i}>
            <img className=" h-auto rounded-xl" src={src} alt={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCards;
