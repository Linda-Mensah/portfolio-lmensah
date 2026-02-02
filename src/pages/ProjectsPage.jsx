import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import Projects from "../components/Projects";
import { projects } from "../constants/projects";
import { contact } from "../constants/contact";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#121816] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#8aa39b] hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">
            All Projects
          </h1>
          <p className="text-lg sm:text-xl text-[#8aa39b] max-w-3xl">
            A collection of my work spanning frontend development, testing, and
            quality assurance. Each project represents unique challenges and
            solutions in creating reliable software.
          </p>
          <div className="mt-6 text-sm text-[#8aa39b]">
            Showing {Projects.length} projects
          </div>
        </div>

        {/* Filter/Stats Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-[rgba(255,255,255,0.03)] rounded-xl border border-white/5">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#083D26] text-[#A3C9B8] rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1.5 bg-[#083D26] text-[#A3C9B8] rounded-full text-xs">
              Next.js
            </span>
            <span className="px-3 py-1.5 bg-[#083D26] text-[#A3C9B8] rounded-full text-xs">
              Testing
            </span>
            <span className="px-3 py-1.5 bg-[rgba(255,255,255,0.08)] text-[#8aa39b] rounded-full text-xs">
              +{projects.length - 3} more
            </span>
          </div>

          <div className="text-sm text-[#8aa39b]">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-[rgba(255,255,255,0.03)] rounded-2xl border border-white/5 text-center">
          <h3 className="text-xl sm:text-2xl font-medium mb-4">
            Have a project in mind?
          </h3>
          <p className="text-[#8aa39b] mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and challenging
            projects. Let's build something amazing together.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C95616] hover:bg-[#b04813] text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </Link>

          <div className="mt-8 sm:mt-10 md:mt-12 flex gap-4 sm:gap-6 justify-center opacity-60">
            {contact.map((platform) => (
              <a
                key={platform.title}
                href={platform.link}
                target="_blank"
                className="text-inherit no-underline font-medium text-sm sm:text-base hover:opacity-80 transition-opacity duration-300"
              >
                {platform.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
