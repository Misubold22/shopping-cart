// Shop.jsx
import { Outlet, useOutletContext } from "react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function Shop() {
  const [setCount] = useOutletContext();
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    // console.log(e.target);
    setCount((count) => count + 1);
    //setClicked(!clicked);
    e.preventDefault();
  };

  const handleDetailClick = (e) => {
    console.log("bosss");

    setClicked(!clicked);
  };

  return (
    <div className="shop">
      <AnimatePresence mode="wait">
        <Outlet context={{ handleClick }} />
      </AnimatePresence>
    </div>
  );
}

export default Shop;
