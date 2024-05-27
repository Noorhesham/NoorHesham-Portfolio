"use client"
import { projects } from "@/data";
import React, { useEffect, useState } from "react";
import Project from "./Project";
import ProjectDescription from "./ProjectDescription";
import { useRouter, useSearchParams } from "next/navigation";

const ProjectsBig = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState("");
  useEffect(
    function () {
      const id = searchParams.get("projectBig");
      //@ts-ignore
      if (id) setSelectedProject(projects.find(project=>project.id===+id));
      else setSelectedProject('')
    },
    [searchParams]
  );
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    router.push(`/?projectBig=${project.id}`, { scroll: false });
  };
  const handleBackClick = () => {
    setSelectedProject("");
    router.push("/", { scroll: false });
  };
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2  mt-24">
      {selectedProject ? (
        <ProjectDescription moveback={handleBackClick} project={selectedProject} />
      ) : (
        projects
          .slice(0,4)
          .map((project: any) => (
            <Project onClick={() => handleProjectClick(project)} key={project.id} project={project} />
          ))    
      )}
    </div>
  );
};

export default ProjectsBig;
