import classes from "./Content.module.css";
import nueva from "../../assets/projects/nueva.png";
import mkn from "../../assets/projects/mkn.png";
import mc from "../../assets/projects/mc.png";

import atlas from "../../assets/projects/atlas.png";
const Projects = () => {
  return (
    <div className={classes.projects}>
      <a
        href="https://nueva.ge"
        target="_blank"
        rel="noopener"
        className={classes.project}
      >
        <img className={classes.image} src={nueva} alt="projectimage" />
        <div>
          <p>
            The entire design, from layout to UI elements and full functional,
            including admin panel, was created by me, ensuring a seamless and
            responsive experience across PC, tablet, and mobile devices. The
            website was successfully deployed using cPanel hosting, ensuring
            reliability and smooth operation.
          </p>
        </div>
      </a>
      <br></br>
      <hr />
      <br></br>
      <a
        className={classes.project}
        href="https://gentle-pika-603b9c.netlify.app/"
        target="_blank"
        rel="noopener"
      >
        <img className={classes.image} src={mkn} alt="projectimage" />
        <div>
          <p>
            I was approached to create a website tailored to the specific needs
            of a client. The website was built with a focus on delivering a
            seamless user experience and meeting the client's requirements.
            After discussing the project goals, I crafted a fully functional
            site that fulfills the purpose of showcasing services. The website
            features a clean design, intuitive navigation, and is optimized for
            performance, ensuring both ease of use for visitors and smooth
            operation for the client
            <br></br>
          </p>
        </div>
      </a>
      <br></br>
      <hr />
      <br></br>

      <a
        className={classes.project}
        href="https://vocal-kashata-6079a2.netlify.app/"
        target="_blank"
        rel="noopener"
      >
        <img className={classes.image} src={atlas} alt="projectimage" />

        <div>
          <p>
            I am currently working on the first Georgian web atlas, a web
            application designed to visualize and interact with geospatial data.
            The Georgian Geographical Institute provided the geospatial
            datasets, which I convert into GeoJSON format for efficient
            rendering. The application allows users to toggle the visibility of
            different geographical layers, including lines and polygons,
            providing an interactive mapping experience.
            <br></br>
          </p>
        </div>
      </a>
      <br></br>
      <hr />
      <br></br>
      <a
        className={classes.project}
        href="https://gleaming-bavarois-901659.netlify.app/"
        target="_blank"
        rel="noopener"
      >
        <img className={classes.image} src={mc} alt="projectimage" />

        <div>
          <p>
            This page is designed exclusively for company dealers to calculate
            transportation costs based on predefined rates managed by the admin.
            Dealers can input vehicle details and destination information to
            receive accurate pricing estimates. All transportation rates are set
            and managed by the admin page. Only authorized dealers can use the
            tool. Calculate transportation expenses efficiently based on
            predefined rates. This system ensures a seamless and reliable
            experience for company dealers handling vehicle transportation.
            <br></br>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Projects;
