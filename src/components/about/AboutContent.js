import { useContext } from "react";
import Context from "../../context";

const AboutContent = () => {
  const { textContent } = useContext(Context);

  return (
    <div className="home-body">
      <div className="container">
        <div className="sub-container">
          <div className="about">
            <span>{textContent.about.title}</span>
            <p>{textContent.about.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
