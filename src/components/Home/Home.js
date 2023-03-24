import "./Home.css";

import { ReactComponent as Bubble } from "../../Assets/svg/bubble.svg";

import { ReactComponent as Heap } from "../../Assets/svg/heap.svg";
import { ReactComponent as Queue } from "../../Assets/svg/queue__preview.svg";
import { ReactComponent as Tree } from "../../Assets/svg/s.svg";
import { ReactComponent as HeapSort } from "../../Assets/svg/heap_sort.svg";
import { ReactComponent as DynamicArray } from "../../Assets/svg/dynamic_array.svg";

import { ReactComponent as Js } from "../../Assets/svg/icons8-javascript-logo.svg";

import { ReactComponent as React } from "../../Assets/svg/icons8-react.svg";
import { ReactComponent as Git } from "../../Assets/svg/icons8-github.svg";

const Home = () => {
  return (
    <div className="Home">
      <div className="top">
        <div className="name"> Shashank shekhar.</div>
        <div> slider menu</div>
      </div>
      <div className="mid">
        {/* <h1> I am Shashank shekhar </h1> */}
        {/* <div className="skills"> */}
        <div className="competitive">
          {/* <Bubble className="bubble"></Bubble> */}
          {/* <Heap className="bubble"></Heap> */}
          <Queue className="queue"></Queue>
          {/* <Tree className="bubble"></Tree> */}
          <HeapSort className="HeapSort"></HeapSort>
          <DynamicArray className="Dynamic"></DynamicArray>
          <Js className="Js"></Js>
          <React className="React"></React>

          <Git className="Git"></Git>

          <div className="cc">Competitive coder</div>
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
