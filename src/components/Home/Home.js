import "./Home.css";
import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
    { source: "Alice", target: "Sally" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 800,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const onClickNode = function (nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function (source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const Home = () => {
  return (
    <div className="Home">
      <div className="top">
        <div> Shashank shekhar.</div>
        <div> slider menu</div>
      </div>
      <div className="mid">
        <h1> I am Shashank shekhar </h1>
        <div className="skills">
          <div>
            <button>competitive coder </button>
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

          <div>
            <button>Web developer</button>
          </div>
        </div>
      </div>

      <div>
        <div>{/* <circle></circle> */}</div>
      </div>
    </div>
  );
};

export default Home;
