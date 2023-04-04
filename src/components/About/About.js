import "./About.css";
import { useState, useEffect } from "react";
import { ReactComponent as Heroku } from "./../../Assets/svg/heroku-icon.svg";
import Header from "./../header/Header";
import GreetingStyled from "./../Greeting/GreetingStyled";

const About = () => {
  const [scrol, setScroll] = useState("a-about");

  useEffect(() => {
    setTimeout(() => {
      setScroll("about");
    }, 3000);
  }, []);
  return (
    <div className={scrol}>
      <GreetingStyled className="gss" pageName={"About"}></GreetingStyled>
      <div className="abouts">
        <Header></Header>
        <div className="i-intro">
          {" "}
          I specialize in creating dynamic, user-friendly websites that meet the
          needs of businesses and organizations. I have expertise in multiple
          programming languages, including HTML, CSS, JavaScript, and PHP, and
          am proficient in using popular web development frameworks such as
          React, Angular, and Vue.js. I am skilled in developing responsive web
          designs that optimize for mobile and desktop platforms. I also have
          experience integrating various web services and APIs, such as payment
          gateways and social media platforms, to enhance website functionality.
          Finally, I am committed to staying up-to-date with the latest web
          development trends and standards to ensure that the websites I develop
          are secure, accessible, and user-friendly."
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
              <div className="i-skills-image">image</div>
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
              <div className="i-skills-image">image</div>
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
              <div className="i-skills-image">image</div>
            </div>
          </div>
        </div>

        <div className="form">
          <div width="form-text">
            If you know of any job opportunities that might be a good match for
            my skills and experience, I would love to hear about them.
          </div>
          <div className="contact-form"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
