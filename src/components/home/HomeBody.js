const HomeBody = () => {
  return (
    <div className="home-body">
      <div className="container">
        <div className="sub-container">
          <i className="fas fa-laptop"></i>
          <h3>
            Hello. My name is Daniel Murathodzic, and I'm an aspiring developer.
          </h3>
          <div className="stack">
            <div className="js adjust">
              <i className="fab fa-js-square js"></i>
              <p>JavaScript</p>
            </div>
            <div className="html adjust">
              <i className="fab fa-html5 html"></i>
              <p>HTML</p>
            </div>
            <div className="css adjust">
              <i className="fab fa-css3-alt css"></i>
              <p>CSS</p>
            </div>
            <div className="sass adjust">
              <i className="fab fa-sass sass"></i>
              <p>Sass</p>
            </div>
            <div className="react adjust">
              <i className="fab fa-react react"></i>
              <p>React</p>
            </div>
            <div className="git adjust">
              <i className="fab fa-git git"></i>
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
