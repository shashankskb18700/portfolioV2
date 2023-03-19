import "./Home.css";

import { ReactComponent as Bubble } from "../../Assets/svg/bubble.svg";

import Bubblr from "../../Assets/svg/bubble.svg";

const Home = () => {
  return (
    <div className="Home">
      <div className="top">
        <div> Shashank shekhar.</div>
        <div> slider menu</div>
      </div>
      <div className="mid">
        {/* <h1> I am Shashank shekhar </h1> */}
        {/* <div className="skills"> */}
        <div className="competitive">
          <Bubble className="bubble"></Bubble>
          <div>Competitive coder</div>
          {/* <div>
              <Graph
                id="graph-id" // id is mandatory
                data={data}
                config={myConfig}
                onClickNode={onClickNode}
                className="graphSvg"

                // onClickLink={onClickLink}
              />
            </div> */}
        </div>

        <div className="webD">
          {" "}
          <div>Web developer</div>
        </div>
        {/* </div> */}
      </div>

      <div>
        <div>{/* <circle></circle> */}</div>
      </div>
    </div>
  );
};

export default Home;
