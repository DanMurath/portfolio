const ResumeContent = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="titles">
          <div className="education ta">
            <p>
              <i className="fas fa-graduation-cap"></i>Education:
            </p>
          </div>
          <div className="technologies ta">
            <p>
              <i className="fas fa-code"></i>Technologies:
            </p>
          </div>
          <div className="languages ta">
            <p>
              <i className="fas fa-comment-dots"></i>Languages:
            </p>
          </div>
        </div>
        <div className="descriptions">
          <div className="education ta">
            <p>St. David's Sixth Form</p>
            <p>BBB [2018 - 2020]</p>
            <p>St. Illtyd's High School</p>
            <p>AAAABBB [2013 - 2018]</p>
          </div>
          <div className="stack technologies ta">
            <p>JavaScript</p>
            <p>React</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>SCSS(Sass)</p>
            <p>Materialize</p>
            <p>Git</p>
          </div>
          <div className="languages ta">
            <p>English</p>
            <p>Italian</p>
            <p>Bosnian</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
