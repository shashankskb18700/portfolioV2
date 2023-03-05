import "./Greeting.css";

import { useEffect, useState } from "react";

const Greeting = () => {
  const [logo, setLogo] = useState("sLogo");
  const [val, setVal] = useState("S");

  useEffect(() => {
    setTimeout(() => {
      setLogo("greeting");
      setVal("");
      gree();
    }, 6000);
  }, []);

  const gree = () => {
    let arr = ["hello", "hola", "namaste"];
    let i = 0;
    setInterval(() => {
      setVal(arr[i]);
      i = i + 1;
    }, 600);
  };

  return (
    <div className="greet">
      <div className={logo}>
        <h3>{val}</h3>
      </div>
      {/* <div className={logo == "greeting" ? "greeting" : ""}>Hello</div> */}
    </div>
  );
};

export default Greeting;
