import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tech,
  links,
  icon: Icon,
  image,
  role,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncatedDescription =
    description.length > 120
      ? description.substring(0, 120) + "..."
      : description;

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        flex flex-col p-4 border-dashed sm:rounded-3xl overflow-hidden
        transition-all duration-300
        border-2 border-white/5
        ${isHovered ? "bg-white/5 -translate-y-1 shadow-xl" : "bg-[rgba(255,255,255,0.03)]"}
        group
      `}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-center transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

        {/* Icon overlay - always show an icon */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
          {Icon ? (
            <Icon className="w-5 h-5 text-white" />
          ) : (
            <ExternalLink className="w-5 h-5 text-white" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl sm:text-2xl font-medium group-hover:text-[#D1EBE3] transition-colors">
            {title}
          </h3>
          {role && (
            <span className="text-xs px-3 py-1 rounded-full bg-[#D1EBE3]/20 text-[#D1EBE3] border border-[#D1EBE3]/30 ml-2">
              {role}
            </span>
          )}
        </div>

        {/* Description with toggle */}
        <div className="mb-4 sm:mb-6 flex-1">
          <p className="text-sm sm:text-base text-[#8aa39b]">
            {showFullDescription ? description : truncatedDescription}
          </p>

          {description.length > 120 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#C95616] hover:text-[#8aa39b] transition-colors cursor-pointer"
            >
              {showFullDescription ? (
                <>
                  Show Less
                  <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  View Details
                  <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((techItem, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-[#8aa39b] border border-white/5"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          {links?.demo && links.demo !== "#" ? (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D1EBE3] hover:text-[#8aa39b] transition-colors"
            >
              View Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-sm text-[#8aa39b]">Demo Coming Soon</span>
          )}

          <div className="text-xs text-[#8aa39b]">
            {tech.length} technologies
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
