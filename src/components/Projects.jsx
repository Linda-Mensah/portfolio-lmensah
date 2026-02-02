import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import ProjectsPage from "../pages/ProjectsPage";
import { projects } from "../constants/projects";

const Projects = () => {
  // Get first 6 projects for homepage
  const homepageProjects = projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-32"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-2">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-[#8aa39b]">
            Recent projects showcasing frontend development and QA experience
          </p>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C95616] hover:bg-[rgba(255,255,255,0.1)] border border-white/10 rounded-lg text-sm font-medium transition-all hover:gap-3 group"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {homepageProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <Link
        to="/projects"
        className="inline-flex items-center mt-4 gap-2 px-6 py-3 bg-[#C95616] hover:bg-[rgba(255,255,255,0.1)] border border-white/10 rounded-lg text-sm font-medium transition-all hover:gap-3 group"
      >
        View All Projects
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
};

export default Projects;
