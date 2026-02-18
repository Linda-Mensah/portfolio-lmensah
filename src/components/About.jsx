import Plank from "./Plank";
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-8 md:py-8 lg:py-8 fade-in-section"
    >
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-8 md:gap-10 items-start">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8 sm:mb-10">
            The intersection of logic and creativity.
          </h2>
          <p className="text-lg md:text-xl text-[#8aa39b] mb-6 sm:mb-8 leading-relaxed">
            I'm a passionate frontend developer with a unique background in
            Quality Assurance. This combination gives me a distinctive
            perspective on building software, with a keen eye for detail and a
            deep understanding of user experience.
          </p>

          <p className="text-lg md:text-xl text-[#8aa39b] mb-2 sm:mb-2 leading-relaxed">
            Today, I focus on building accessible, performant, and visually
            polished web applications. My QA background means I write cleaner
            code, anticipate edge cases, and always keep the end user in mind.
          </p>
        </div>

        <div className="w-full lg:w-1/2 min-h-75 sm:min-h-87.5 md:min-h-100 flex flex-col justify-center items-center lg:items-end">
          {/* User-Centered - Top */}
          <Plank
            variant="green"
            className="w- sm:w-65 md:w-70 lg:w-[320px] -rotate-1 z-30 hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            style={{
              animation: "float 8s ease-in-out infinite 1s",
              "--r": "-1deg",
            }}
          >
            User-Centered
          </Plank>

          {/* Detail Oriented */}
          <Plank
            variant="ghost"
            className="w-[50 sm:w-60 md:w-65 lg:w-75 -rotate-2 -mb-2 sm:-mb-3 z-10 hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            style={{
              animation: "float 7s ease-in-out infinite",
              "--r": "-2deg",
            }}
          >
            Detail Oriented
          </Plank>

          {/* Pixel Perfect */}
          <Plank
            variant="mint"
            className="w-60 sm:w-70 md:w-75 lg:w-85 rotate-3 -mb-2 sm:-mb-3 z-20 hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            style={{
              animation: "float 6s ease-in-out infinite 0.5s",
              "--r": "3deg",
            }}
          >
            Pixel Perfect
          </Plank>

          {/* Accessibility First - Bottom */}
          <Plank
            variant="green"
            className="w-55 sm:w-65 md:w-70 lg:w-[320px] -rotate-1 z-30 hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            style={{
              animation: "float 8s ease-in-out infinite 1s",
              "--r": "-1deg",
            }}
          >
            Accessibility First
          </Plank>
        </div>
      </div>
    </section>
  );
};

export default About;
