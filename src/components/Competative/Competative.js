import "./Competitive.css";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "./../header/Header";

import Video from "./../../Assets/video/cc3compresed.mp4";

import RatingCard from "./RatingCard/RatingsCard";

import { ReactComponent as Codechef } from "../../Assets/svg/codechef.svg";

import { ReactComponent as CodeForces } from "../../Assets/svg/code-forces.svg";

import { ReactComponent as HackerRank } from "../../Assets/svg/hackerrank.svg";
// let scrll = 0;
// window.addEventListener("scroll", () => {
//   scrll = window.screenY;
// });
// console.log(scrll);

const Competative = () => {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY);
    });
  });

  return (
    <div className="competitiv" onScroll={() => console.log()}>
      <Header></Header>

      <div
        className="subtext bs"
        style={{ transform: `translate3d(0,-${scrolled}px, 0)` }}
      >
        bianry search{" "}
      </div>
      <div
        className="subtext dp"
        style={{ transform: `translate3d(0,-${scrolled - 350}px, 0)` }}
      >
        {" "}
        DP{" "}
      </div>

      <div
        className="subtext tc"
        style={{ transform: `translate3d(0,-${scrolled - 100}px, 0)` }}
      >
        Time complexity{" "}
      </div>
      <div
        className="subtext sc"
        style={{ transform: `translate3d(0,-${scrolled - 100}px, 0)` }}
      >
        space complexity{" "}
      </div>

      <div
        className="subtext math"
        style={{ transform: `translate3d(0,-${scrolled}px, 0)` }}
      >
        Maths{" "}
      </div>

      <div
        className="subtext chinese-r"
        style={{ transform: `translate3d(0,-${scrolled - 210}px, 0)` }}
      >
        Chinese remainder theorem{" "}
      </div>

      <div
        className="subtext fenwick-t"
        style={{ transform: `translate3d(0,-${scrolled - 170}px, 0)` }}
      >
        Fenwick Trees{" "}
      </div>

      <div className="cc-heading">
        {" "}
        <h1 className="cc-bold">COMPETITIVE CODER </h1>
        <video
          playsInline
          muted
          autostart
          autoPlay
          loop
          src={Video}
          type="video/mp4"
          className="cc-video"
        />
      </div>
      <div className="cc-intro">
        {" "}
        As a passionate competitive coder, I am always looking for new
        challenges and opportunities to improve my skills. From the first time I
        participated in a coding competition, I was hooked on the rush of
        analyzing complex problems and finding innovative solutions. Since then,
        I have participated in numerous competitions and have developed a strong
        foundation in programming languages and algorithms. I am driven to
        constantly improve my skills and strive to achieve high rankings and
        recognition for my work. Coding competitions provide me with a sense of
        community and the opportunity to connect with other passionate coders.
        As a competitive coder, I am always looking for ways to push myself and
        expand my knowledge, and I am excited to see what new challenges the
        future holds.
      </div>
      <div className="cc-achivement">
        <div className="cc-ach-heading"> Rating and rankings</div>
        <div className="cc-ach">
          <RatingCard
            Svg={Codechef}
            rating={"2 ⭐️"}
            platform={"codechef"}
            to={"https://www.codechef.com/users/shashank18700"}
          ></RatingCard>
          <RatingCard
            Svg={CodeForces}
            rating={"grey coder"}
            platform={"codeforces"}
            to={"https://codeforces.com/profile/shashankskb18700"}
          ></RatingCard>
          <RatingCard
            Svg={HackerRank}
            rating={"3 ⭐"}
            platform={"hackerrank"}
            to={"https://www.hackerrank.com/shashankskb18700"}
          ></RatingCard>
        </div>
      </div>
    </div>
  );
};

// const subText = styled.div`
//   transform: translate3d();
// `;

export default Competative;
