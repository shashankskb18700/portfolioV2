import React from "react";
import { useEffect, useState } from "react";
import Greeting from "./Greeting/Greeting";
import Home from "./Home/Home";

import "./App.css";

const App = () => {
  const [Y, setY] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (Y > 100) {
      setColor("red");
    }
  }, [Y]);

  return (
    <div className="AppD">
      <Greeting className="greetingApp"></Greeting>
      <Home className="homeApp"></Home>
    </div>
  );
};

export default App;
