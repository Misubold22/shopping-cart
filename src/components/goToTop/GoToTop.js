import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

const GoToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return children;
};

export default GoToTop;
