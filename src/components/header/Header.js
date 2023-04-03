import "./Header.css";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="top">
      <Link to="/" className="name">
        {" "}
        Shashank shekhar.
      </Link>
      <div className="links">
        {/* <Link to="/">Home</Link> */}
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
