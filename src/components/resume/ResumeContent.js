import { useContext } from "react";
import Context from "../../context";

const ResumeContent = () => {
  const { textContent } = useContext(Context);

  return (
    <div className="container">
      <div className="sub-container">
        <div className="titles">
          <div className="education ta">
            <p>
              <i className="fas fa-graduation-cap"></i>
              {textContent.resume.education.title}
            </p>
          </div>
          <div className="technologies ta">
            <p>
              <i className="fas fa-code"></i>
              {textContent.resume.technologies.title}
            </p>
          </div>
          <div className="languages ta">
            <p>
              <i className="fas fa-comment-dots"></i>
              {textContent.resume.languages.title}
            </p>
          </div>
        </div>
        <div className="descriptions">
          <div className="education ta">
            <p>{textContent.resume.education.schoolOne}</p>
            <p>{textContent.resume.education.gradesOne}</p>
            <p>{textContent.resume.education.schoolTwo}</p>
            <p>{textContent.resume.education.gradesTwo}</p>
          </div>
          <div className="stack technologies ta">
            {textContent.resume.technologies.techList.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="languages ta">
            {textContent.resume.languages.langList.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
