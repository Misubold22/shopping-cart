// App.jsx

import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import GoToTop from "./components/goToTop/GoToTop.js";

function App() {
  const [count, setCount] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  // const handleChange = () => {
  //setIsHidden((prev) => !prev);
  // };

  return (
    <GoToTop>
      <Header
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        count={count}
        setCount={setCount}
      />
      <Footer />
    </GoToTop>
  );
}

export default App;
