import classes from "./Content.module.css";
const Skill = ({ src, alt, name, description }) => {
  return (
    <>
      <li className={classes.listItem}>
        <div className={classes.skill}>
          <img src={src} alt={`${alt}-icon`} className={classes.icon} />
          <h1 className={classes.listHeader}>{name}</h1>
        </div>
        <p className={classes.desc}>{description}</p>
      </li>
      <hr className={classes.line}></hr>
    </>
  );
};

export default Skill;
