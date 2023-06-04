import { useState, useEffect } from "react";

import "./Webd.css";
import Video from "./../../Assets/video/webdev-2.mp4";
import Header from "./../header/Header";
import { Link } from "react-router-dom";

const Webd = () => {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY);
    });
  });

  return (
    <div className="WebDeveloper" onScroll={() => console.log()}>
      <Header></Header>
      <div
        className="websubtext http"
        style={{ transform: `translate3d(0,-${scrolled}px, 0)` }}
      >
        http
      </div>
      <div
        className="websubtext json"
        style={{ transform: `translate3d(0,-${scrolled - 150}px, 0)` }}
      >
        {" "}
        Json{" "}
      </div>

      <div
        className="websubtext api"
        style={{ transform: `translate3d(0,-${scrolled - 100}px, 0)` }}
      >
        Api{" "}
      </div>
      <div
        className="websubtext frontend"
        style={{ transform: `translate3d(0,-${scrolled - 100}px, 0)` }}
      >
        frontend{" "}
      </div>

      <div
        className="websubtext backend"
        style={{ transform: `translate3d(0,-${scrolled}px, 0)` }}
      >
        backend{" "}
      </div>

      <div
        className="websubtext seo"
        style={{ transform: `translate3d(0,-${scrolled - 300}px, 0)` }}
      >
        SEO{" "}
      </div>

      <div
        className="websubtext testing"
        style={{ transform: `translate3d(0,-${scrolled - 40}px, 0)` }}
      >
        Testing & maintenance{" "}
      </div>

      <div className="web-heading">
        {" "}
        <h1>Web developer </h1>
        <video
          playsInline
          muted
          autostart
          autoPlay
          loop
          src={Video}
          type="video/mp4"
          className="web-video"
        />
      </div>
      <div className="web-intro">
        {" "}
        As a web developer, I am passionate about creating innovative and
        engaging online experiences that connect users with businesses and
        organizations. From the first time I built a website, I was fascinated
        by the way that code could be used to bring a vision to life. Since
        then, I have honed my skills in HTML, CSS, JavaScript,React JS , Node ,
        and other web development technologies to create responsive,
        user-friendly, and visually stunning websites. I am committed to staying
        up-to-date with the latest industry trends and best practices, and I am
        always eager to learn new skills and techniques. As a web developer, I
        am dedicated to providing my clients with customized solutions that meet
        their unique needs and help them achieve their goals. I believe that
        every website has the potential to make a real impact, and I am excited
        to be a part of this dynamic and constantly evolving field.
      </div>
      <Link className="works" to="/work">
        Check out my recent works
      </Link>
    </div>
  );
};

export default Webd;
