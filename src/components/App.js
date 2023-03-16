import React from "react";
import { useEffect, useState } from "react";
import Greeting from "./Greeting/Greeting";
import Home from "./Home/Home";

const App = () => {
  const [Y, setY] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (Y > 100) {
      setColor("red");
    }
  }, [Y]);

  return (
    <div>
      <Greeting></Greeting>
      <Home></Home>
    </div>
  );
};

export default App;
