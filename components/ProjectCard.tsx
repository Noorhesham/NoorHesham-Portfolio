"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import {motion} from 'framer-motion'
const ProjectCard = ({ project,onClick }: { project: any,onClick:()=>void }) => {
  return (
    <motion.div   initial={{ opacity: 0, y: -20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{stiffness:.3,duration:1,}}>
      <CardContainer className="inter-var relative ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {project.title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {project.des.split(" ").slice(1, 13).join(" ")}{" "}
          <span className="  text-base  text-purple hover:text-purple-500 duration-200">Read More ...</span>
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
          <Image
            src={project.img}
            height="1000"
            width="1000"
            className=" h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className=" flex items-center ">
          {project.iconLists.map((icon: any, i: number) => (
            <div
              style={{ transform: `translateX(-${5 * i * 2}px)` }}
              className=" border rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8  flex justify-center items-center border-white/[0.2]"
              key={icon}
            >
              <Image width={20} height={20} src={icon} alt={icon} className=" p-2" />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>

            <button  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" onClick={onClick}>Details</button>
        </div>
      </CardBody>
    </CardContainer>
    </motion.div>
  );
};

export default ProjectCard;
