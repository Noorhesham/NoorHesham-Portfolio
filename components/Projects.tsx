import { projects } from "@/data";
import React from "react";
import PaginatedProjects from "./PaginatedProjects";
import ProjectsBig from "./ProjectsBig";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className=" py-20">
      <h1 className="heading capitalize z-10 relative">
        best of my solo  <span className="text-purple">recent projects</span>
      </h1>
      <ProjectsBig />
      <h1 className="heading capitalize z-10 relative">
        most of my cool <span className="text-purple"> projects</span>
      </h1>
      <Link href={'https://github.com/Noorhesham'} className=" my-5 underline w-fit hover:text-gray-400 duration-200 relative  flex items-center z-10 capitalize  gap-2 text-center mx-auto">Check More on Github <FaGithub/></Link>
      <PaginatedProjects projects={projects.slice(4, projects.length)} />
    </div>
  );
};

export default Projects;
