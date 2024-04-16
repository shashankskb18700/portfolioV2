import "./About.css";
import { useState, useEffect } from "react";

import { ReactComponent as Heroku } from "./../../Assets/svg/heroku-icon.svg";

import { ReactComponent as LaptopCode } from "./../../Assets/svg/laptopCode.svg";

import { ReactComponent as Server } from "./../../Assets/svg/server-svgrepo-com.svg";
import { ReactComponent as Deployment } from "./../../Assets/svg/cloud-arrow-up-fill-svgrepo-com.svg";
import img1 from "./../../Assets/Images/blackand white.png";

import Header from "./../header/Header";
import GreetingStyled from "./../Greeting/GreetingStyled";
import { Link } from "react-router-dom";

const About = () => {
  const [scrol, setScroll] = useState("a-about");

  useEffect(() => {
    setTimeout(() => {
      setScroll("about");
    }, 1000);
  }, []);
  return (
    <div className={scrol}>
      <GreetingStyled className="gss" pageName={"About"}></GreetingStyled>
      <div className="abouts">
        <Header></Header>
        <div className="i-intro">
          {/* <div
            className="img1"
            style={
              {
                // backgroundImage: `linear-gradient( rgb(255, 255, 255, 0), rgb(255 ,255, 255) ), url(https://i.ibb.co/M1mfdkJ/blackand-white.png)`,
                // backgroundColor: "rgb(128 128 128)",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "centre",
                // backgroundSize: "100vh 66vh",
              }
            }
          ></div> */}
          <img src={img1} className="img1"></img>
          <div className="about-me">
            I am Shashank Shekhar, a 4th year student at Chandigarh University.
            I'm pursuing 'Bachelor of Engineering in Computer Science (With
            specialization in Artificial Intelligenge and Machine Learning)'. I
            specialize in creating dynamic, user-friendly websites that meet the
            needs of businesses and organizations. I have expertise in multiple
            programming languages, including HTML, CSS, JavaScript, and i am
            proficient in using popular web development frameworks such as
            React. I am skilled in developing responsive web designs that
            optimize for mobile and desktop platforms. I also have experience
            integrating various web services and APIs, such as payment gateways
            and social media platforms, to enhance website functionality.
            Finally, I am committed to staying up-to-date with the latest web
            development trends and standards to ensure that the websites I
            develop are secure, accessible, and user-friendly."
          </div>
        </div>

        <div className="i-skills">
          <div className="front-end">
            <h1>Frontend</h1>
            <div className="i-skills-details">
              <div className="i-skills-icon">
                <td className="i-skills-icons">
                  <tr>
                    {" "}
                    <i
                      className="fa-brands fa-html5 "
                      style={{ color: "#f20707" }}
                    ></i>
                    &nbsp; HTML
                  </tr>
                  <tr>
                    <i
                      className="fa-brands fa-css3-alt"
                      style={{ color: "#822eff" }}
                    ></i>
                    &nbsp;CSS
                  </tr>
                </td>

                <td className="i-skills-icons">
                  <tr>
                    <i
                      className="fa-brands fa-react"
                      style={{ color: "#8accf5" }}
                    ></i>
                    &nbsp;REACT
                  </tr>
                  <tr>
                    <i
                      className="fa-brands fa-react"
                      style={{ color: "#0244b6" }}
                    ></i>
                    &nbsp;REDUX
                  </tr>
                  <tr>
                    <i
                      className="fa-brands fa-sass"
                      style={{ color: "#ff0095" }}
                    ></i>
                    &nbsp;SASS
                  </tr>
                </td>

                <td className="i-skills-icons">
                  <tr>
                    <i
                      className="fa-brands fa-js"
                      style={{ color: "#eeff00" }}
                    ></i>
                    &nbsp;JAVASCRIPT
                  </tr>
                  <tr>
                    <i
                      className="fa-brands fa-bootstrap"
                      style={{ color: "#7211ef" }}
                    ></i>
                    &nbsp;BOOTSTRAP
                  </tr>
                </td>
              </div>
              <div className="skills-f">
                <LaptopCode className="skills-f"></LaptopCode>
              </div>
            </div>
          </div>

          <div className="back-end">
            <h1>Backend</h1>
            <div className="i-skills-details">
              <div className="i-skills-icon">
                <td className="i-skills-icons">
                  <tr>
                    <i
                      className="fa-brands fa-node"
                      style={{ color: "#0b9823" }}
                    ></i>
                    &nbsp;NODE JS
                  </tr>
                  <tr>
                    <i
                      className="fa-solid fa-cube"
                      style={{ color: "#001eb3" }}
                    ></i>
                    &nbsp;WEBPACK
                  </tr>
                </td>
                <td className="i-skills-icons">
                  <tr>
                    <i
                      className="fa-brands fa-java"
                      style={{ color: "#9a9ca2" }}
                    ></i>
                    &nbsp;JAVA
                  </tr>
                  <tr>
                    <i
                      className="fa-solid fa-database"
                      style={{ color: "#279400" }}
                    ></i>
                    &nbsp;MONGO DB
                  </tr>
                </td>

                <td className="i-skills-icons">
                  <tr>
                    <i
                      className="fa-brands fa-python"
                      style={{ color: "#9bf57a" }}
                    ></i>
                    &nbsp;PYTHON
                  </tr>
                </td>
              </div>
              <div className="skills-b">
                <Server className="skills-f"></Server>
              </div>
            </div>
          </div>

          <div className="deployment">
            <h1>Deployment</h1>
            <div className="i-skills-details">
              <div className="i-skills-icon">
                <td className="i-skills-icons">
                  <tr>
                    <i
                      className="fa-brands fa-git"
                      style={{ color: "#ff0000" }}
                    ></i>
                    &nbsp; GIT
                  </tr>
                  <tr>
                    <i class="fa-brands fa-github"></i>
                    &nbsp; GITHUB
                  </tr>
                </td>

                <td className="i-skills-icons">
                  <tr>
                    <i
                      class="fa-sharp fa-solid fa-fire-flame-simple"
                      style={{ color: "#99ff00" }}
                    ></i>
                    &nbsp; Firestore
                  </tr>
                  <tr className="herok-u">
                    <Heroku className="heroku"></Heroku>
                    &nbsp;HEROKU
                  </tr>
                </td>
              </div>
              <Deployment className="skills-f"></Deployment>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="form-text">
            If you know of any job opportunities that might be a good match for
            my skills and experience, I would love to hear about them.
          </div>
          <Link className="contact-formm" to="/contact">
            {" "}
            Lets get connected !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
