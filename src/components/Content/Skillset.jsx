// import netlify from "../../assets/skillset/netlify.svg";
// import cpanel from "../../assets/skillset/cpanel.svg";
// import esri from "../../assets/skillset/esri.svg";
import css from "../../assets/skillset/css.svg";
import figma from "../../assets/skillset/figma.svg";
import firebase from "../../assets/skillset/firebase.svg";
import github from "../../assets/skillset/github.svg";
import html from "../../assets/skillset/html.svg";
import illustrator from "../../assets/skillset/ill.svg";
import js from "../../assets/skillset/js.svg";
import mongo from "../../assets/skillset/mongo.svg";
import photoshop from "../../assets/skillset/photoshop.svg";
import supabase from "../../assets/skillset/supabase.svg";
import react from "../../assets/skillset/react.svg";
import router from "../../assets/skillset/router.svg";
import tailwind from "../../assets/skillset/tailwind.svg";

import classes from "./Content.module.css";
import Skill from "./Skill";

const Skillset = () => {
  return (
    <div className={classes.skillset}>
      <ul className={classes.front}>
        <h2 className={classes.sectionHeader}>Frontend Development</h2>
        <Skill
          src={js}
          alt="javascript"
          name={"JavaScript"}
          description="Add interactivity, manage state, and handle DOM manipulations."
        />
        <Skill
          src={react}
          alt="react"
          name="React"
          description="Build dynamic and interactive web applications with reusable components."
        />
        <Skill
          src={router}
          alt="router"
          name="React-Router"
          description="Implement client-side routing for seamless navigation in single-page applications"
        />
        <Skill
          src={html}
          alt="html"
          name="HTML5"
          description="Structure web content effectively for better accessibility and SEO."
        />
        <Skill
          src={css}
          alt="css"
          name="CSS3"
          description="Style and layout web pages using modern techniques like Flexbox and Grid"
        />
        <Skill
          src={tailwind}
          alt="tailwind"
          name="Tailwind"
          description="Style web applications efficiently using utility-first classes for rapid UI development"
        />
      </ul>
      <br></br>
      <br></br>
      <ul className={classes.front}>
        <h2 className={classes.sectionHeader}>Databases</h2>
        <Skill
          src={supabase}
          alt="supabase"
          name="Supabase"
          description="Manage real-time databases, authentication, and cloud storage for web apps."
        />
        <Skill
          src={firebase}
          alt="firebase"
          name="Firebase"
          description="Set up PostgreSQL databases, authentication, and API endpoints."
        />
        <Skill
          src={mongo}
          alt="mongo"
          name="MongoDB"
          description="Store and manage large-scale NoSQL data efficiently."
        />
      </ul>
      <br></br>
      <br></br>
      <ul className={classes.front}>
        <h2 className={classes.sectionHeader}>Design</h2>
        <Skill
          src={figma}
          alt="figma"
          name="Figma"
          description="Design UI/UX layouts, create prototypes, and collaborate on designs."
        />
        <Skill
          src={illustrator}
          alt="illustrator"
          name="Adobe Illustrator"
          description="Create vector graphics, logos, and icons for web and print."
        />
        <Skill
          src={photoshop}
          alt="photoshop"
          name="Adobe Photoshop"
          description="Edit images, design web assets, and create digital artwork."
        />
      </ul>
      <br></br>
      <br></br>
      <ul className={classes.front}>
        <h2 className={classes.sectionHeader}>
          Version Control & Collaboration
        </h2>
        <Skill
          src={github}
          className={classes.git}
          alt={"github"}
          name="Git & Github"
          description="Track code changes, collaborate on projects, and manage repositories."
        />
      </ul>
      {/* <img src={netlify} alt="skill" className={classes.icon} />

      <img src={cpanel} alt="skill" className={classes.icon} />
      <img src={esri} alt="skill" className={classes.icon} />
      <img src={github} alt="skill" className={classes.icon} /> */}
    </div>
  );
};

export default Skillset;
