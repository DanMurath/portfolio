//import { ContentItems } from "./ContentItems";
import { useContext } from "react";
import Context from "../../context";

const PortfolioContent = () => {
  const { textContent } = useContext(Context);

  return (
    <div className="p-content">
      <div className="p-tile">
        <div className="tile-title">{textContent.projects.xbox}</div>
        <div className="project-bod one">
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

        <div className="tile-title">{textContent.projects.react}</div>
        <div className="project-bod two">
          <div className="background">
            <a
              href="https://dans-blog-demo.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i>
              {textContent.projectButtons.demo}
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

        <div className="tile-title">{textContent.projects.site}</div>
        <div className="project-bod three">
          <div className="background">
            <a
              href="https://github.com/DanMurath/portfolio"
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
