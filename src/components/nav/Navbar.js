import LanguageToggle from "./LanguageToggle";
import { useContext, useState } from "react";
import Context from "../../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { textContent } = useContext(Context);

  const handleClick = () => {
    state === false ? setState(true) : setState(false);
  };

  return (
    <div className="nav">
      <LanguageToggle />
      <div className="menu-icon" onClick={handleClick}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        <li className="nav-margin-top">
          <Link className="nav-links" to="/" onClick={handleClick}>
            {textContent.nav.home}
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/projects" onClick={handleClick}>
            {textContent.nav.projects}
          </Link>
        </li>
        <li className="nav-margin-bottom">
          <Link className="nav-links" to="/about" onClick={handleClick}>
            {textContent.nav.about}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
