import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const hover = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  return (
    <div className="footer">
      <Link to="/resume" className="footer-resume">
        Resume
      </Link>
      <div className="socials">
        <a
          href="mailto:danielmurathodzic@hotmail.com"
          onMouseEnter={hover}
          onMouseLeave={hover}
        >
          <i className={open ? "fas fa-envelope-open" : "fas fa-envelope"}></i>
        </a>
        <a href="https://github.com/DanMurath">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://uk.linkedin.com/in/daniel-murathodzic-8812301b1">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
