import classes from "./Content.module.css";
import nueva from "../../assets/projects/nueva.png";
import mkn from "../../assets/projects/mkn.png";
import mc from "../../assets/projects/mc.png";
import admin from "../../assets/projects/admin.png";
import atlas from "../../assets/projects/atlas.png";

const projectList = [
  {
    title: "Nueva",
    image: nueva,
    link: "https://nuevapage.netlify.app/",
    description:
      "The entire design, from layout to UI elements and full functionality, including admin panel, was created by me, ensuring a seamless and responsive experience across PC, tablet, and mobile devices. The website was successfully deployed using cPanel hosting, ensuring reliability and smooth operation.",
  },
  {
    title: "Nueva Admin Page",
    image: admin,
    link: "https://adminnueva.netlify.app/",
    description:
      "Admin page for Nueva. Here the admin can add new projects or remove existing ones. The admin can also edit all project details, including pictures.",
  },
  {
    title: "MKN",
    image: mkn,
    link: "https://mkntkn.netlify.app/",
    description:
      "I was approached to create a website tailored to the specific needs of a client. The website was built with a focus on delivering a seamless user experience and meeting the client's requirements. After discussing the project goals, I crafted a fully functional site that fulfills the purpose of showcasing services. The website features a clean design, intuitive navigation, and is optimized for performance.",
  },
  {
    title: "Georgian Web Atlas",
    image: atlas,
    link: "https://ggu.netlify.app/",
    description:
      "UNDER PRODUCTION! I am currently working on the first Georgian web atlas, a web application designed to visualize and interact with geospatial data. The Georgian Geographical Institute provided the geospatial datasets, which I convert into GeoJSON format for efficient rendering. The application allows users to toggle the visibility of different geographical layers, including lines and polygons, providing an interactive mapping experience.",
  },
  {
    title: "MC Shipping Calculator",
    image: mc,
    link: "https://mcshipcalculator.netlify.app/",
    description:
      "This page is designed exclusively for company dealers to calculate transportation costs based on predefined rates managed by the admin. Dealers can input vehicle details and destination information to receive accurate pricing estimates. Only authorized dealers can use the tool. This system ensures a seamless and reliable experience for company dealers handling vehicle transportation.",
  },
];

const Projects = () => {
  return (
    <div className={classes.projects}>
      {projectList.map(({ title, image, link, description }, index) => (
        <div key={index}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.project}
          >
            <img
              className={classes.image}
              src={image}
              alt={`Screenshot of ${title}`}
            />
            <div>
              <p>{description}</p>
            </div>
          </a>
          {index < projectList.length - 1 && (
            <>
              <br />
              <hr />
              <br />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
