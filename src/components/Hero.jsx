import Plank from "./Plank";
import { ArrowRight } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Hero = () => {
  const sectionRef = useScrollAnimation(0.1);

  return (
    <header
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between pt-20 md:pt-0 fade-in-section"
    >
      <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-2 md:mb-8">
          Hi, my name is Linda A. K. Mensah
        </h1>
        <p className="text-lg md:text-xl text-[#8aa39b] max-w-2xl">
          I'm a frontend developer with a strong QA background, specializing in
          building exceptional digital experiences. Currently focused on
          creating accessible, performant, and user-centric web applications.
        </p>

        <a
          href="https://drive.google.com/file/d/1rTXtTqHKU8p2b0dgVpIl64QwJzZuW6Rp/view?usp=sharing"
          target="_blank"
          className="inline-flex items-center mt-8 gap-2 px-6 py-3 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white/10 rounded-lg text-sm font-medium transition-all hover:gap-3 group"
        >
          View CV
          <ArrowRight className="w-4 h-4  group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="w-full md:w-1/2 h-80 sm:h-110 md:h-130 relative">
        <Plank
          variant="green"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] min-w-45 sm:min-w-50 
            left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0
            md:top-[20%] md:right-[5%] sm:md:right-[10%] 
            top-[15%] 
            -rotate-6 sm:-rotate-8 md:-rotate-12 z-30"
          style={{
            animation: "float 6s ease-in-out infinite",
            "--r": "-12deg",
          }}
        >
          Frontend
        </Plank>

        <Plank
          variant="cream"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] min-w-45 sm:min-w-50 
            left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0
            md:top-[35%] md:right-[15%] sm:md:right-[20%] md:right-[25%] 
            top-[30%]
            rotate-3 sm:rotate-4 md:rotate-6 z-20"
          style={{
            animation: "float 7s ease-in-out infinite reverse",
            "--r": "6deg",
          }}
        >
          Design
        </Plank>

        {/* Architecture - Centered on mobile, right on desktop */}
        <Plank
          variant="orange"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] min-w-45 sm:min-w-50 
            left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0
            md:top-[50%] md:right-[0%] sm:md:right-[2%] md:right-[5%] 
            top-[45%]
            -rotate-3 sm:-rotate-4 md:-rotate-5 z-40"
          style={{
            animation: "float 5s ease-in-out infinite 1s",
            "--r": "-5deg",
          }}
        >
          Interaction
        </Plank>

        {/* Quality - Centered on mobile, right on desktop */}
        <Plank
          variant="ghost"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] min-w-45 sm:min-w-50 
            left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0
            md:top-[60%] md:right-[20%] sm:md:right-[25%] md:right-[30%] 
            top-[60%]
            rotate-8 sm:rotate-12 md:rotate-15 z-10"
          style={{
            animation: "float 6.5s ease-in-out infinite 0.5s",
            "--r": "15deg",
          }}
        >
          Experience
        </Plank>
      </div>
    </header>
  );
};

export default Hero;
