import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET = 96;

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (!element) return;

    const y =
      element.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, [hash]);

  return null;
};

export default ScrollToHash;
