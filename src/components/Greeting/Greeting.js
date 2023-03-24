import "./Greeting.css";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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
      <Title className={logo}>
        <h3>{val}</h3>
      </Title>
      {/* <div className={logo == "greeting" ? "greeting" : ""}>Hello</div> */}
    </div>
  );
};

const textFade = keyframes`
0% {
    transform: translateY(0);

    rotate: 0deg;
    background-color: none;
    color: dodgerblue;
    /* clip-path:polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%); */
    /* clip-path: polygon(0 0%, 0% 0%, 0 0%, 0% 0%, 0% 0) */
    /* clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0); */
    
    /* clip-path: inset(0 0 100% 0); */
  }

  5% {
    transform: translateY(0);
    rotate: 0deg;
    background-color: black;
    color: rgba(221, 255, 30, 0.76);
  }

  10% {
    transform: translateY(0);
    rotate: 0deg;
    background-color: black;
    color: rgb(250, 53, 184);
  }

  15% {
    transform: translateY(0);
    rotate: 0deg;
    background-color: black;
    color: rgb(159, 223, 150);
  }

  20% {
    transform: translateY(0);
    rotate: 0deg;
    background-color: black;
    color: rgb(30, 203, 255);
  }

  25% {
    transform: translateY(0);
    rotate: 0deg;
    background-color: black;
    color: rgb(188, 255, 30);
  }

  30% {
    transform: translateY(0);
    rotate: 0deg;
    background-color: black;
    color: rgb(212, 116, 103);
  }

  35% {
    transform: translateY(0);
    rotate: 0deg;
    background-color: black;
    color: rgba(30, 143, 255, 0);
  }

  40% {
    transform: translateY(0);
    /* rotate: 45deg; */
    background-color: black;
    color: rgb(122, 50, 155);
  }

  43% {
    /* clip-path: circle(99.8% at 50% 70%); */
    
    
    transform: translateY(0);
    /* rotate: 90deg; */
    background-color: rgb(0, 0, 0);
    color: rgb(9, 236, 111);
  }

  45% {
    /* polygon(79% 0%, 100% 0%, 21% 100%, 100% 100%, 100% 0); */
    /* clip-path: circle(89.8% at 50% 50%); */

/*  */
    clip-path: polygon(100% 0%, 0% 0%, -60% 100%, 100% 100%, 100% 0%);

    /* clip-path:polygon(100% 0%, 79% 0%, 21% 100%, 100% 100%, 100% 0); */

    /*  */
    /* clip-path:polygon(100% 0%, 79% 0%, 21% 100%, 100% 100%, 100% 0); */
    transform: translateY(0);
    /* rotate: 180deg; */
    background-color: rgb(0, 0, 0);
    color: rgb(204, 177, 23);
  }

  50% {
    /* clip-path: circle(79.8% at 50% 40%); */
    /* clip-path: polygon(0 0%, 65% 0%, 15% 100%, 0% 100%); */
    transform: translateY(0);
    /* clip-path:polygon( 100% 0%, 100% 100%,0% 100%,0 40%, 30% 0, 0% 0%); */
    
    /* rotate: 360deg; */
    background-color: rgb(0, 0, 0);
    color: rgba(204, 118, 118, 0.959);
  }

  60% {
    /* clip-path: circle(69.8% at 49% 30%); */
    /* clip-path: polygon(0 0%, 55% 0%, 12% 100%, 0% 100%); */
    transform: translateY(0);
    background-color: rgb(0, 0, 0);
    color: rgb(0, 204, 255);
    /* rotate: 360deg; */
    /* font-size: 20rem; */
  }
  70% {
    /* clip-path: circle(59.8% at 49% 25%); */
    /* clip-path: polygon(0 0%, 50% 0%, 10% 100%, 0% 100%); */
    /* top: 0%; */
    transform: translateY(0vh);
    background-color: rgb(0, 0, 0);
    color: rgb(157, 187, 117);
    /* rotate: 360deg; */
    /* clip-path: polygon(100% 0%, 40% 0%, 0 100%, 100% 100%, 100% 0%); */
  }
  73.5% {
    /* clip-path: circle(49.8% at 51% 20%); */
    /* clip-path: polygon(0 0%, 40% 0%, 5% 100%, 0% 100%); */

    transform: translateY(0vh);
  }

  77% {
    /* clip-path: circle(39.8% at 50% 15%); */
    /* clip-path: polygon(0 0%, 30% 0%, 0% 100%, 0% 100%); */
    transform: translateY(0vh);
  }

  80% {
    /* top: -40%; */
    /* clip-path: circle(29.8% at 50% 10%); */
    transform: translateY(0vh);
    background-color: rgb(0, 0, 0);
    color: rgb(216, 172, 172);
    /* rotate: 360deg; */
  }

  83.5% {
    /* clip-path: circle(19.8% at 50% 5%); */
    transform: translateY(0vh);
  }
  87% {
    /* clip-path: circle(9.8% at 50% 3%); */
    
    
    transform: translateY(0vh);
  }

  90% {
    /* clip-path: polygon(0 0%, 79% 0%, 21% 100%, 0% 100%); */
    /* clip-path:polygon(79% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 0); */
    /* clip-path:polygon(79% 0%, 100% 0%, 100% 100%, 21% 100%); */

    /* same shape with differet starting side and it fixed animation problem  */
    /* clip-path: inset(0); */
    clip-path:polygon(100% 0%, 79% 0%, 21% 100%, 100% 100%, 100% 0);
    

    /* clip-path: circle(0.8% at 50% 0%); */
    /* top: -50%; */
    /* transform: translateY(-20vh); */
    background-color: rgb(0, 0, 0);
    color: rgb(160, 65, 65);
    /* rotate: 360deg; */
  }

  93.5% {
    /* transform: translateY(-40vh); */
  }

  97% {
    /* transform: translateY(-60vh); */
  }
  100% {
    /* clip-path: circle(29.3% at 50% 0); */

    /* top: -100%; */
    /* transform: translateY(-100vh); */

    background-color: rgb(0, 0, 0);
    color: black;
    /* rotate: 360deg; */
  }
`;
const Title = styled.div`
  animation-name: ${textFade};
  animation-duration: 6s;
  animation-timing-function: linear;
`;

export default Greeting;
