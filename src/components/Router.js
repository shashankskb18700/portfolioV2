import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";

import Competitive from "./Competative/Competative";
import Webd from "./webd/Webd";
import Greeting from "./Greeting/Greeting";
import About from "./About/About";
import Contact from "./Contacts/Contact";

import Work from "./Work/Work";

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Greeting></Greeting>}></Route> */}
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cc" element={<Competitive></Competitive>}></Route>
      <Route path="/webD" element={<Webd></Webd>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/work" element={<Work></Work>}></Route>
    </Routes>
  );
};

export default AppRouter;
