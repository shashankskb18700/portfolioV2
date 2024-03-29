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
    let url = document.URL;
    // if (url !== "http://localhost:3000/") {
    //   setGTiming(true);
    // }

    if (document.URL !== "https://shashank-shekhar.netlify.app/") {
      setGTiming(true);
    }

    setTimeout(() => {
      setGTiming(true);
    }, 4000);
  }, []);

  return (
    <div className="AppD">
      {gTiming ? (
        <AppRouter></AppRouter>
      ) : (
        <Greeting className="greetingApp"></Greeting>
      )}
      {/* {gTiming == false ? (
        <Greeting className="greetingApp"></Greeting>
      ) : (
        <GreetingStyled></GreetingStyled>
      )} */}

      {/* <Greeting className="greetingApp"></Greeting>

      <AppRouter></AppRouter> */}
      {/* <Home className="homeApp"></Home> */}
    </div>
  );
};

export default App;
