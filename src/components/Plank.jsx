// Plank.jsx
import React from "react";

const Plank = ({ children, variant = "ghost", className = "", style = {} }) => {
  const variantClasses = {
    green: "bg-[#083D26] text-[#A3C9B8]",
    cream: "bg-[#F2E6D6] text-[#5C4B3A]",
    mint: "bg-[#D1EBE3] text-[#2A453D]",
    orange: "bg-[#C95616] text-white",
    ghost: "bg-[rgba(255,255,255,0.08)] text-[#8aa39b] border border-white/5",
  };

  return (
    <div
      className={`
        inline-flex items-center justify-center
        px-4 sm:px-6 md:px-8 
        py-2 sm:py-3 md:py-4
        rounded-xl sm:rounded-2xl font-medium 
        text-sm sm:text-base md:text-lg lg:text-xl
        tracking-tight shadow-lg select-none
        transition-all duration-400
        max-w-full wrap-break-word whitespace-normal
        ${variantClasses[variant]} ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Plank;
