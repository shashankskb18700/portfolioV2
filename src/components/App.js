import React from "react";
import { useEffect, useState } from "react";
import Greeting from "./Greeting/Greeting";
import Home from "./Home/Home";

import "./App.css";

const App = () => {
  const [gTiming, setGTiming] = useState(false);
  const [color, setColor] = useState("black");

  useEffect(() => {
    let val = 0;
    const interv = setInterval(() => {
      val += 0.5;

      if (val == 5.5) {
        setGTiming(true);
        clearInterval(interv);
      }
    }, 500);
  }, []);

  return (
    <div className="AppD">
      {/* {gTiming ? (
        <Home className="homeApp"></Home>
      ) : (
        <Greeting className="greetingApp"></Greeting>
      )} */}
      <Greeting className="greetingApp"></Greeting>
      <Home className="homeApp"></Home>
    </div>
  );
};

export default App;
