import classes from "./Skills.module.css";
import js from "../../assets/skills/js.svg";
import css from "../../assets/skills/css.svg";
import html from "../../assets/skills/html.svg";
import firebase from "../../assets/skills/firebase.svg";
import mongo from "../../assets/skills/mongo.svg";
import github from "../../assets/skills/github.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import logo from "../../assets/skills/logo.svg";
import figma from "../../assets/skills/figma.svg";
import ps from "../../assets/skills/ps.svg";
import ai from "../../assets/skills/ai.svg";
import esri from "../../assets/skills/esri.svg";

const Skills = () => {
  return (
    <div className={classes.main}>
      <div className={classes.aboutSkills}>
        <p className={classes.header}>
          I am a versatile developer skilled in <strong>HTML & CSS</strong>,
          <strong>JavaScript</strong>, and
          <strong> React</strong>, with a strong foundation in modern web
          technologies. My experience extends to using{" "}
          <strong>Git & GitHub</strong> for version control, and I have hands-on
          expertise with <strong>MongoDB</strong> and <strong>Firebase</strong>{" "}
          for database management and implementing <strong>CRUD</strong>{" "}
          operations. I am proficient in
          <strong> Tailwind.CSS</strong> for styling, and I utilize{" "}
          <strong>Figma</strong>, <strong>Adobe Photoshop</strong>, and
          Illustrator for design work. Additionally, I have knowledge in ESRI
          <strong> ArcGIS</strong>, enhancing my capabilities in geographic
          information systems for creating a maps for web.
        </p>
      </div>

      <div className={classes.skillset}>
        <div className={classes.firstWrapper}>
          <div className={classes.skill}>
            <img className={classes.logo} src={html} alt="skill"></img>
            <h2>HTML5</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={css} alt="skill"></img>
            <h2>CSS3</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={js} alt="skill"></img>
            <h2>JavaScript</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={logo} alt="skill"></img>
            <h2>React</h2>
          </div>
        </div>

        <div className={classes.secondWrapper}>
          <div className={classes.skill}>
            <img className={classes.logo} src={firebase} alt="skill"></img>
            <h2>Google Firebase</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={mongo} alt="skill"></img>
            <h2>MongoDB</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={github} alt="skill"></img>
            <h2>GIT & Github</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={tailwind} alt="skill"></img>
            <h2>Tailwind.CSS</h2>
          </div>
        </div>
        <div className={classes.thirdWrapper}>
          <div className={classes.skill}>
            <img className={classes.logo} src={esri} alt="skill"></img>
            <h2>Esri ArcMap</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={figma} alt="skill"></img>
            <h2>Figma</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={ai} alt="skill"></img>
            <h2>PhotoshopCC</h2>
          </div>
          <div className={classes.skill}>
            <img className={classes.logo} src={ps} alt="skill"></img>
            <h2>IllustratorCC</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
