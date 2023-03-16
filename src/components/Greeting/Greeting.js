import "./Greeting.css";

import { useEffect, useState } from "react";

const Greeting = () => {
  const [logo, setLogo] = useState("sLogo");
  const [pageRemoval, setPageRemoval] = useState("greet");
  const [val, setVal] = useState("□");

  useEffect(() => {
    setTimeout(() => {
      // setLogo("greeting");
      // setVal("");
      gree();
    }, 7000);
  }, []);

  const gree = () => {
    let arr = [".hello.", ".hola.", ".namaste."];
    let i = 0;
    const interval = setInterval(() => {
      setVal(arr[i]);
      i = i + 1;

      if (i === 4) {
        clearInterval(interval);
        setPageRemoval("none");
        setLogo("none");
      }

      console.log(i);
    }, 350);
  };

  return (
    <div className={pageRemoval}>
      <div className={logo}>
        <h3>{val}</h3>
      </div>
      {/* <div className={logo == "greeting" ? "greeting" : ""}>Hello</div> */}
    </div>
  );
};

export default Greeting;
