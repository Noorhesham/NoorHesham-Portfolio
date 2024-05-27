import { projects } from "@/data";
import React from "react";
import PaginatedProjects from "./PaginatedProjects";
import ProjectsBig from "./ProjectsBig";

const Projects = () => {
  return (
    <div id="projects" className=" py-20">
      <h1 className="heading capitalize z-10 relative">
        best of my solo projects <span className="text-purple">recent projects</span>
      </h1>
      <ProjectsBig />
      <h1 className="heading capitalize z-10 relative">
        most of my cool <span className="text-purple"> projects</span>
      </h1>
      <PaginatedProjects projects={projects.slice(4, projects.length)} />
    </div>
  );
};

export default Projects;
