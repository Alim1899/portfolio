import classes from "./Content.module.css";
const Card = ({ date, header, text, langs = [] }) => {
  return (
    <div className={classes.card}>
      <div className={classes.date}>{date}</div>
      <div className={classes.details}>
        <h3 className={classes.header}>{header}</h3>
        <p className={classes.text}>{text}</p>
        <div className={classes.langs}>
          {langs.map((el) => (
            <h4 className={classes.lang} key={el}>
              {el}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
