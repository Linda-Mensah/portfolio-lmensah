import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../constants/navItems";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const currentHash = location.hash;

  const isActive = (item) => {
    // Anchor links (homepage sections)
    if (item.type === "anchor") {
      return currentPath === "/" && currentHash === `#${item.id}`;
    }

    // // Route links (e.g. /projects)
    // return item.to !== "/" && currentPath.startsWith(item.to);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 backdrop-blur-lg bg-[#121816]/95 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 font-semibold text-lg sm:text-xl md:text-2xl tracking-tight no-underline text-white"
        >
          <div className="relative w-6 h-6 border-2 border-white rounded">
            <div className="absolute -top-1.5 -left-1.5 w-full h-full border-2 border-[#8aa39b] rounded"></div>
          </div>
          <span>LINDA.DEV</span>
        </Link>

        {/* Nav items */}
        <div className="flex gap-3 sm:gap-4 md:gap-8">
          {navItems.map((item) => {
            const active = isActive(item);

            // Homepage section links
            if (item.type === "anchor") {
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(`/#${item.id}`)}
                  className={`relative bg-transparent border-0 cursor-pointer text-[#8aa39b] hover:text-white transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap ${
                    active ? "text-white" : ""
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8aa39b] rounded-full"></span>
                  )}
                </button>
              );
            }

            // Route links
            return (
              <Link
                key={item.id}
                to={item.to}
                className={`relative text-[#8aa39b] hover:text-white transition-colors duration-300 text-xs sm:text-sm no-underline whitespace-nowrap ${
                  active ? "text-white" : ""
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8aa39b] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
