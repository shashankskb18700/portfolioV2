import "./Greeting.css";

import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;

// let width = window.screen.availWidth;
// let width = window.screen.width;
let width = window.innerWidth;

// let height = window.screen.availHeight;
// let height = window.screen.height;
let height = window.innerHeight;

if (width > height) {
  let perpendicular = height / 2;
  x1 = ((width / 2 + perpendicular) / width) * 100;
  y1 = 0;
  x2 = ((width / 2 - perpendicular) / width) * 100;
  y2 = (height / height) * 100;
}

if (height > width) {
  let base = width / 2;

  x2 = (width / width) * 100;
  y2 = ((height / 2 - base) / height) * 100;

  x1 = 0;
  y1 = ((height / 2 + base) / height) * 100;
}

const Greeting = () => {
  const [logo, setLogo] = useState("sLogo");
  const [pageRemoval, setPageRemoval] = useState("greet");

  const [val, setVal] = useState("");

  // const [val, setVal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPageRemoval("none");
      setLogo("none");
    }, 5000);
    gree();
  }, []);

  const gree = () => {
    let arr = [".Hello.", ".Hola.", ".नमस्ते.", ".Ciao.", ".您好.", ".Olá."];
    let i = 0;
    const interval = setInterval(() => {
      // setVal(arr[i]);
      setVal(arr[i]);
      i = i + 1;

      if (i === 7) {
        clearInterval(interval);
        // setPageRemoval("none");
        // setLogo("none");
      }
    }, 350);
  };

  console.log("x1  " + x1);
  console.log("y1  " + y1);
  console.log("x2  " + x2);
  console.log("y2  " + y2);

  // animation har bbaar zero pe ja raha ku ki state update ho raha
  // how to state update without complete re render

  return (
    <div className={pageRemoval}>
      <Title className={logo}>
        <h3>{val}</h3>

        {/* {g.map((e, i) =>
          setTimeout(() => {
            <div>{e}</div>;
          }, i * 1000)
        )} */}

        {/* {g.forEach((name, i) => {
          setTimeout(() => {
            return <div>{name}</div>;
          }, i * 1000);
        })} */}

        {/* {console.log(val.current)} */}
      </Title>
      {/* <div className={logo == "greeting" ? "greeting" : ""}>Hello</div> */}
    </div>
  );
};

const textFade = keyframes`
0% {
    
    background-color: none;
    color: dodgerblue;
    
   
  }

  5% {
 
    background-color: black;
    color: rgba(221, 255, 30, 0.76);
  }

  10% {
 
    background-color: black;
    color: rgb(250, 53, 184);
  }

  15% {
   
 
    background-color: black;
    color: rgb(159, 223, 150);
  }

  20% {
    
  
    background-color: black;
    color: rgb(30, 203, 255);
  }

  25% {
   
    background-color: black;
    color: rgb(188, 255, 30);
  }

  30% {
  
    background-color: black;
    color: rgb(212, 116, 103);
  }

  35% {
    
 
    background-color: black;
    color: rgba(30, 143, 255, 0);
  }

  40% {
   
    background-color: black;
    color: rgb(122, 50, 155);
  }

  43% {
    /* clip-path: circle(99.8% at 50% 70%); */
    
    
    clip-path: polygon(100% 0%, 0% 0%, -60% 100%, 100% 100%, 100% 0%);
    /* clip-path:polygon(100% 0%, ${x1}% ${y1}%, ${x2}% ${y2}%, 100% 100%, 100% 0); */
    background-color: rgb(0, 0, 0);
    color: rgb(9, 236, 111);
  }

  45% {
  
   

    

    /*  */
    
   
    background-color: rgb(0, 0, 0);
    color: rgb(204, 177, 23);
  }

  50% {
   
   
    background-color: rgb(0, 0, 0);
    color: rgba(204, 118, 118, 0.959);
  }

  60% {
 
    background-color: rgb(0, 0, 0);
    color: rgb(0, 204, 255);
    
  }
  70% {
   
    
    background-color: rgb(0, 0, 0);
    color: rgb(157, 187, 117);
    /* rotate: 360deg; */
    
  }
  73.5% {
    

    transform: translateY(0vh);
  }

  77% {
    
    transform: translateY(0vh);
  }

  80% {
    
    background-color: rgb(0, 0, 0);
    color: rgb(216, 172, 172);
    /* rotate: 360deg; */
  }

  83.5% {
    
    
  }
  87% {
   
   
  }

  90% {
    

    /* same shape with differet starting side and it fixed animation problem  */
    /* clip-path: inset(0); */
    /* clip-path:polygon(100% 0%, 79% 0%, 21% 100%, 100% 100%, 100% 0); */

    
    

    background-color: rgb(0, 0, 0);
    color: rgb(160, 65, 65);
    
  }

  93.5% {
    
  }

  97% {
   
  }
  100% {
   
    clip-path:polygon(100% 0%, ${x1}% ${y1}%, ${x2}% ${y2}%, 100% 100%, 100% 0);
    background-color: rgb(0, 0, 0);
    color: black;
    
  }
`;

const textFadeMobile = keyframes`
0% {
    
    background-color: none;
    color: dodgerblue;
    
   
  }

  5% {
 
    background-color: black;
    color: rgba(221, 255, 30, 0.76);
  }

  10% {
 
    background-color: black;
    color: rgb(250, 53, 184);
  }

  15% {
   
 
    background-color: black;
    color: rgb(159, 223, 150);
  }

  20% {
    
  
    background-color: black;
    color: rgb(30, 203, 255);
  }

  25% {
   
    background-color: black;
    color: rgb(188, 255, 30);
  }

  30% {
  
    background-color: black;
    color: rgb(212, 116, 103);
  }

  35% {
    
 
    background-color: black;
    color: rgba(30, 143, 255, 0);
  }

  40% {
   
    background-color: black;
    color: rgb(122, 50, 155);
  }

  43% {
    /* clip-path: circle(99.8% at 50% 70%); */
    
    
    clip-path: polygon(100% -50%, 0% 0%, 0% 100%, 100% 100%, 100% 0%);


    /* clip-path: polygon(${x2}% ${y2}%, ${x1}% ${y1}%, 0 100%, 100% 100%, 100% 0); */

    /* clip-path:polygon(100% 0%, ${x1}% ${y1}%, ${x2}% ${y2}%, 100% 100%, 100% 0); */
    background-color: rgb(0, 0, 0);
    color: rgb(9, 236, 111);
  }

  45% {
  
   

    

    /*  */
    
   
    background-color: rgb(0, 0, 0);
    color: rgb(204, 177, 23);
  }

  50% {
   
   
    background-color: rgb(0, 0, 0);
    color: rgba(204, 118, 118, 0.959);
  }

  60% {
 
    background-color: rgb(0, 0, 0);
    color: rgb(0, 204, 255);
    
  }
  70% {
   
    
    background-color: rgb(0, 0, 0);
    color: rgb(157, 187, 117);
    /* rotate: 360deg; */
    
  }
  73.5% {
    

    transform: translateY(0vh);
  }

  77% {
    
    transform: translateY(0vh);
  }

  80% {
    
    background-color: rgb(0, 0, 0);
    color: rgb(216, 172, 172);
    /* rotate: 360deg; */
  }

  83.5% {
    
    
  }
  87% {
   
   
  }

  90% {
    

    /* same shape with differet starting side and it fixed animation problem  */
    /* clip-path: inset(0); */
    /* clip-path:polygon(100% 0%, 79% 0%, 21% 100%, 100% 100%, 100% 0); */

    
    

    background-color: rgb(0, 0, 0);
    color: rgb(160, 65, 65);
    
  }

  93.5% {
    
  }

  97% {
   
  }
  100% {
   
    clip-path: polygon(${x2}% ${y2}%, ${x1}% ${y1}%, 0 100%, 100% 100%, 100% 0);

    /* clip-path: polygon(100% 26%, 0% 73%, 0 100%, 100% 100%, 100% 0); */
    /* clip-path:polygon(100% 0%, ${x1}% ${y1}%, ${x2}% ${y2}%, 100% 100%, 100% 0); */
    background-color: rgb(0, 0, 0);
    color: black;
    
  }
`;

const Title =
  width > height
    ? styled.div`
        animation-name: ${textFade};
        animation-duration: 5s;
        animation-timing-function: linear;
      `
    : styled.div`
        animation-name: ${textFadeMobile};
        animation-duration: 5s;
        animation-timing-function: linear;
      `;

// clip-path: polygon(${x2}% ${y2}%,${x1}% ${y1}%, 0 100%, 100% 100%, 100% 0)

export default Greeting;
