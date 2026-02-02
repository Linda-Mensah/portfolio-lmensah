import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../constants/navItems";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = location.pathname;
  const currentHash = location.hash;

  const isActive = (item) => {
    if (item.type === "anchor") {
      return currentPath === "/" && currentHash === `#${item.id}`;
    }
    return item.to !== "/" && currentPath.startsWith(item.to);
  };

  const handleAnchorClick = (itemId) => {
    navigate(`/#${itemId}`);
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 backdrop-blur-lg bg-[#121816]/95 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 font-semibold text-lg sm:text-xl md:text-2xl tracking-tight no-underline text-white"
          onClick={handleLinkClick}
        >
          <div className="relative w-6 h-6 border-2 border-white rounded">
            <div className="absolute -top-1.5 -left-1.5 w-full h-full border-2 border-[#8aa39b] rounded"></div>
          </div>
          <span>LINDA.DEV</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#8aa39b] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-3 sm:gap-4 md:gap-8">
          {navItems.map((item) => {
            const active = isActive(item);

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
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Panel with solid background */}
        <div
          className={`fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } bg-transparent text-white shadow-lg`}
        >
          <div className="py-8 px-2 bg-black/90 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-[#8aa39b]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-6">
              {navItems.map((item) => {
                const active = isActive(item);

                if (item.type === "anchor") {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleAnchorClick(item.id)}
                      className={`text-left text-[#8aa39b] font-semibold border-0 cursor-pointer transition-colors duration-300 text-sm whitespace-nowrap py-2 ${
                        active ? "font-semibold" : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    onClick={handleLinkClick}
                    className={`transition-colors duration-300 text-sm no-underline whitespace-nowrap py-2 ${
                      active ? "font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
