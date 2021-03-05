//import LanguageToggle from "./LanguageToggle";
//import NavOptions from "./NavOptions";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    state === false ? setState(true) : setState(false);
  };

  return (
    <div className="nav">
      <h1 className="navbar-logo">
        <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url} onClick={handleClick}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
