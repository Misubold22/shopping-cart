// App.jsx

import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  // const handleChange = () => {
  //setIsHidden((prev) => !prev);
  // };

  return (
    <div>
      <Header
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
