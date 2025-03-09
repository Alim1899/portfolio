import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.personal}>
        <h1>Alim Akhchanogli</h1>
        <h3>Front End Developer</h3>
        <h6>
          I build accessible, pixel-perfect digital experiences for the web.
        </h6>
      </div>
      <div className={classes.navlinks}>
        <div className={classes.link}>
          <hr />
          About
        </div>
        <div className={classes.link}>
          <hr />
          Experience
        </div>
        <div className={classes.link}>
          <hr />
          Skillset
        </div>
        <div className={classes.link}>
          <hr />
          Projects
        </div>
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
