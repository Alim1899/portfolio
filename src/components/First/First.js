import classes from "./First.module.css";
import aa from "../../assets/aa.svg";
const First = () => {
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <img src={aa} className={classes.svg} alt="aa"></img>
          <div className={classes.text}>
            <h2>
              Hey, i'm <strong>Alim</strong>
            </h2>
            <h2>
              I'm a Front-End <strong>Web-Developer</strong>
            </h2>
            <h2>Based in Georgia, Tbilisi</h2>
          </div>
        </div>
        <div className={classes.content }>
        <div className={classes.content}>
            <div className={classes.bigCircle}>
                <div className={classes.midCircle}>
                    <div className={classes.smallCircle}></div>
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
  );
};

export default First;
