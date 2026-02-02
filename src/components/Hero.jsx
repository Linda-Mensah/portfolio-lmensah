import React from "react";
import Plank from "./Plank";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between pt-20 md:pt-0">
      <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-6 md:mb-8">
          Hi, my name is Linda A. K. Mensah
        </h1>
        <p className="text-lg md:text-xl text-[#8aa39b] max-w-2xl">
          I'm a frontend developer with a strong QA background, specializing in
          building exceptional digital experiences. Currently focused on
          creating accessible, performant, and user-centric web applications.
        </p>

        <a
          href="https://drive.google.com/file/d/1rmkeqSi4CSPNPlo66rGzQiYyaVMgfL_3/view"
          target="_blank"
          className="inline-flex items-center mt-8 gap-2 px-6 py-3 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white/10 rounded-lg text-sm font-medium transition-all hover:gap-3 group"
        >
          View CV
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="w-full md:w-1/2 h-100 sm:h-125 md:h-150 relative">
        {/* Frontend - Top right, rotated -12deg */}
        <Plank
          variant="green"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] h-16 sm:h-20 md:h-20 min-w-45 sm:min-w-50 top-[20%] right-[5%] sm:right-[10%] -rotate-6 sm:-rotate-8 md:-rotate-12 z-30"
          style={{
            animation: "float 6s ease-in-out infinite",
            "--r": "-12deg",
          }}
        >
          Frontend
        </Plank>

        {/* Testing - Middle right, rotated 6deg */}
        <Plank
          variant="cream"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] h-16 sm:h-20 md:h-20 min-w-45 sm:min-w-50 top-[35%] right-[15%] sm:right-[20%] md:right-[25%] rotate-3 sm:rotate-4 md:rotate-6 z-20"
          style={{
            animation: "float 7s ease-in-out infinite reverse",
            "--r": "6deg",
          }}
        >
          Design
        </Plank>

        {/* Architecture - Bottom right, rotated -5deg */}
        <Plank
          variant="orange"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] h-16 sm:h-20 md:h-20 min-w-45 sm:min-w-50 top-[50%] right-[0%] sm:right-[2%] md:right-[5%] -rotate-3 sm:-rotate-4 md:-rotate-5 z-40"
          style={{
            animation: "float 5s ease-in-out infinite 1s",
            "--r": "-5deg",
          }}
        >
          Interaction
        </Plank>

        {/* Quality - Bottom right, rotated 15deg - NO BLUR */}
        <Plank
          variant="ghost"
          className="absolute text-xl sm:text-2xl md:text-[1.5rem] h-16 sm:h-20 md:h-20 min-w-45 sm:min-w-50 top-[60%] right-[20%] sm:right-[25%] md:right-[30%] rotate-8 sm:rotate-12 md:rotate-15 z-10"
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
