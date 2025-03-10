import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import classes from "./Navbar.module.css";
import { useState } from "react";
const Navbar = () => {
  const [selected, setSelected] = useState("About");

  return (
    <div className={classes.navbar}>
      <div className={classes.personal}>
        <h1 className={classes.name}>Alim Akhchanogli</h1>
        <h3 className={classes.occupation}>Front End Developer</h3>
        <h4 className={classes.description}>
          I build accessible, pixel-perfect digital experiences for the web.
        </h4>
      </div>
      <div className={classes.navlinks}>
        {["About", "Experience", "Skillset", "Projects"].map((item) => (
          <button
            key={item}
            className={`${classes.link} ${
              selected === item ? classes.selected : ""
            }`}
            onClick={() => setSelected(item)}
          >
            <hr />
            {item}
          </button>
        ))}
      </div>
      <div className={classes.social}>
        <GrGithub />
        <FaLinkedin />
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Navbar;
