import "./Contact.css";
import { useEffect, useState } from "react";

import From from "./../form/Form";
import Header from "./../header/Header";
import { Link } from "react-router-dom";
import GreetingStyled from "./../Greeting/GreetingStyled";
import img from "../../Assets/Images/proper1-min.png";

const Contact = () => {
  const [visible, setVisible] = useState("a-about");

  useEffect(() => {
    setTimeout(() => {
      setVisible("contact");
    }, 2000);
  });

  return (
    <div className={visible}>
      <GreetingStyled className="gss" pageName={"Contact"}></GreetingStyled>
      <div className="contacts">
        <Header></Header>

        <div className="contact-mid">
          <div className="form-header">
            <div className="form-heading">
              Have a project ? Let's get connected
            </div>
            <From className="contact-F"></From>
          </div>
          <div className="personalDetails">
            <div className="cont-heading">Contacts</div>
            <div>+91 9871791721</div>
            <div>shashankskb18700@gmail.com</div>
            <Link to="https://www.linkedin.com/in/shashank-shekhar-781a951b4/">
              {" "}
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
