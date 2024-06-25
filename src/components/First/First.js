import classes from "./First.module.css";
import aa from "../../assets/aa.svg";

const First = () => {
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <img src={aa} className={classes.svg} alt="aa" />
          <div className={classes.text}>
            <h2>
              Hey, I'm <strong>Alim</strong>
            </h2>
            <h2>
              I'm a Front-End <strong>Web-Developer</strong>
            </h2>
            <h2>Based in <strong>Georgia, Tbilisi</strong></h2>
          </div>
        </div>
        <div className={classes.animation}>
          <div className={classes.bigCircle}>
            <div className={classes.midCircle}>
              <div className={classes.smallCircle}></div>
            </div>
          </div>
          <div className={classes.lines}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
