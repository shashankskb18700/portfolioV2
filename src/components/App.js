import React from "react";
import { useEffect, useState } from "react";
import Greeting from "./Greeting/Greeting";
import Home from "./Home/Home";
import GreetingStyled from "./Greeting/GreetingStyled";

import AppRouter from "./Router";

import "./App.css";

const App = () => {
  const [gTiming, setGTiming] = useState(false);
  const [color, setColor] = useState("black");

  useEffect(() => {
    let val = 0;
    // const interv = setInterval(() => {
    //   val += 0.5;

    //   if (val == 4.0) {
    //     setGTiming(true);
    //     clearInterval(interv);
    //   }
    // }, 500);

    setTimeout(() => {
      setGTiming(true);
    }, 5000);
  }, []);

  return (
    <div className="AppD">
      {/* {gTiming ? (
        <AppRouter></AppRouter>
      ) : (
        <Greeting className="greetingApp"></Greeting>
      )} */}
      {/* {gTiming == false ? (
        <Greeting className="greetingApp"></Greeting>
      ) : (
        <GreetingStyled></GreetingStyled>
      )} */}

      <Greeting className="greetingApp"></Greeting>

      <AppRouter></AppRouter>
      {/* <Home className="homeApp"></Home> */}
    </div>
  );
};

export default App;
