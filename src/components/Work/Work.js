import "./Work.css";
import Header from "../header/Header";

import img1 from "./../../Assets/Images/project1ss.png";
import img2 from "./../../Assets/Images/project2ss.png";

const Work = () => {
  return (
    <div className="recent-work">
      <Header></Header>
      My recent works
      <div className="projects">
        <div className="project">
          <img src={img1} className="img"></img>
          <h3>Reedemer</h3>
        </div>
        <div className="project">
          <img src={img2} className="img"></img>
          <h3>Kiriena</h3>
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* <html>
  DOWNLOADING, INSTALLING, OR USING THE CISCO PACKET TRACER SOFTWARE CONSTITUTES
  ACCEPTANCE OF THE CISCO END USER LICENSE AGREEMENT("EULA"
  https://www.cisco.com/c/en/us/about/legal/cloud-and-software/end_user_license_agreement.html)
  AND THE SUPPLEMENTAL END USER LICENSE AGREEMENT FOR CISCO PACKET TRACER
  ("SEULA"
  https://www.cisco.com/c/dam/en_us/about/doing_business/legal/seula/cisco-packet-tracer-software.pdf).
  IF YOU DO NOT AGREE TO ALL OF THE TERMS OF THE EULA AND SEULA, THEN CISCO
  SYSTEMS, INC. ("CISCO") IS UNWILLING TO LICENSE THE SOFTWARE TO YOU AND YOU
  ARE NOT AUTHORIZED TO DOWNLOAD, INSTALL OR USE THE SOFTWARE.
</html>; */
}