import Plank from "./Plank";
import { skills } from "../constants/skills";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Skills = () => {
  const sectionRef = useScrollAnimation(0.2);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-8 lg:py-10 fade-in-section"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-center mb-8 sm:mb-12 md:mb-16">
        Technical Arsenal
      </h2>

      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center px-2">
        {skills.map((skill, index) => (
          <Plank
            key={index}
            variant={skill.variant}
            className={`h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg transition-all duration-300 ${
              index % 3 === 0
                ? "rotate-2"
                : index % 3 === 1
                  ? "-rotate-3"
                  : "rotate-1"
            } hover:scale-105 hover:-translate-y-1`}
            style={{
              animation: `float ${5 + (index % 3)}s ease-in-out infinite ${index * 0.2}s`,
              "--r":
                index % 3 === 0 ? "2deg" : index % 3 === 1 ? "-3deg" : "1deg",
            }}
          >
            {skill.name}
          </Plank>
        ))}
      </div>
    </section>
  );
};

export default Skills;
