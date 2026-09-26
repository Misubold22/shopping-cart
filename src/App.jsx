// App.jsx

import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import GoToTop from "./components/goToTop/GoToTop.js";
import { motion } from "framer-motion";

function App() {
  const [productCount, setProductCount] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  // const handleChange = () => {
  //setIsHidden((prev) => !prev);
  // };
  // <Footer />

  return (
    <GoToTop>
      <Header
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        productCount={productCount}
        setProductCount={setProductCount}
      />
      <Footer />
    </GoToTop>
  );
}

export default App;
