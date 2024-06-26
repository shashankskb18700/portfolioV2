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

import { ReactComponent as Twitter } from "../../Assets/svg/twitter.svg";
import { ReactComponent as Insta } from "../../Assets/svg/instagram.svg";

import Header from "./../header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      {/* <div className="and"> &</div> */}
      <Header></Header>
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
          <Js className="Js glow"></Js>
          <React className="React glow"></React>

          <Git className="Git glow"></Git>
          <Link to="/cc">
            <div className="cc">Competitive Coder</div>
          </Link>

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
          <div className="wb">
            <Link to="/webD">Web Developer </Link>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div>
        <div>{/* <circle></circle> */}</div>
      </div>
      <div className="footer">
        <span>Republic of India.</span>
        <span>
          <div className="socialIcon">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z "
                fill="rgb(26, 119, 242)"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path
                d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                fill="rgb(203, 35, 4)"
              />
            </svg> */}
            <Link
              to={"https://www.linkedin.com/in/shashank-shekhar-781a951b4/"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "3em" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                {" "}
                <path
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                  fill="rgb(11,102,194)"
                />
              </svg>
            </Link>

            {/* <Link to="/" style={{ color: "white" }}>
              <Twitter />
            </Link> */}
            <Link
              to={"https://github.com/shashankskb18700"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "2.4em" }}
            >
              <svg
                aria-hidden="true"
                class="octicon octicon-mark-github"
                height="24"
                version="1.1"
                viewBox="0 0 16 16"
                width="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  fill="rgb(255,255,255)"
                ></path>
              </svg>
            </Link>
            <Link
              to={"https://www.instagram.com/s.shashank32/"}
              target="_blank"
              rel="noopener noreferrer"
              className="insta"
              style={{ width: "2.4em" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="rgb(242, 0, 149)"
                />
              </svg>
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Home;
