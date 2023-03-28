import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";

import Competitive from "./Competative/Competative";

import Greeting from "./Greeting/Greeting";

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Greeting></Greeting>}></Route> */}
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cc" element={<Competitive></Competitive>}></Route>
    </Routes>
  );
};

export default AppRouter;
