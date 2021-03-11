//import { ContentItems } from "./ContentItems";
import { useContext } from "react";
import Context from "../../context";
import imageOne from "../../img/project1.png";
import imageTwo from "../../img/project2.png";

const PortfolioContent = () => {
  const { textContent } = useContext(Context);
  // const image = `${require("../../img/project1.png")}`;

  return (
    <div className="p-content">
      <div className="project-bod one">
        <img src={imageOne} alt="" />
        <div className="title">
          <div className="tile-title">{textContent.projects.xbox}</div>
        </div>
        <p className="xboxE">{textContent.projects.xboxExplained}</p>
        <div className="links">
          <div className="background">
            <a
              href="https://xbox-web-clone.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i>
              {textContent.projectButtons.live}
            </a>
          </div>
          <div className="background">
            <a
              href="https://github.com/DanMurath/xbox-web-clone"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
              {textContent.projectButtons.code}
            </a>
          </div>
        </div>
      </div>

      <div className="project-bod two">
        <img src={imageTwo} alt="" />
        <div className="title">
          <div className="tile-title">{textContent.projects.crypto}</div>
        </div>
        <p>{textContent.projects.cryptoExplained}</p>
        <div className="links">
          <div className="background">
            <a
              href="https://ezcrypto.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i>
              {textContent.projectButtons.live}
            </a>
          </div>
          <div className="background">
            <a
              href="https://github.com/DanMurath/react-blog"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
              {textContent.projectButtons.code}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
