import "./Greeting.css";

import { useEffect, useState } from "react";

const Greeting = () => {
  const [logo, setLogo] = useState("sLogo");
  const [pageRemoval, setPageRemoval] = useState("greet");
  const [val, setVal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPageRemoval("none");
      setLogo("none");
    }, 5500);
    gree();
  }, []);

  const gree = () => {
    let arr = [".Hello.", ".Hola.", ".नमस्ते.", ".Ciao.", ".您好.", ".Olá."];
    let i = 0;
    const interval = setInterval(() => {
      setVal(arr[i]);
      i = i + 1;

      if (i === 7) {
        clearInterval(interval);
        // setPageRemoval("none");
        // setLogo("none");
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
