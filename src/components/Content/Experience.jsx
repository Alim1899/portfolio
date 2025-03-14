import classes from "./Content.module.css";
import Card from "./Card";
const Experience = () => {
  return (
    <div className={classes.experience}>
      <Card
        date="2023 - 2024"
        header="Front-End Developer - Local Client - MKN"
        text=<>
          I was approached to create a website tailored to the specific needs of
          a client. The website was built with a focus on delivering a seamless
          user experience and meeting the client's requirements. After
          discussing the project goals, I crafted a fully functional site that
          fulfills the purpose of showcasing services. The website features a
          clean design, intuitive navigation, and is optimized for performance,
          ensuring both ease of use for visitors and smooth operation for the
          client
          <br></br>
        </>
        langs={["React", "JavaScript", "HTML&CSS"]}
      />
      <Card
        date="2024 - 2025"
        header="Front-End Developer - Nueva"
        text=<>
          I developed and deployed a fully functional web application, with an
          integrated admin panel, allowing administrators to add, remove, and
          edit projects effortlessly. The website supports two languages,
          Georgian and English, ensuring accessibility for a wider audience.
          Each project includes its own set of images, and for optimal
          performance, projects are rendered one by one to enhance speed and
          user experience. The entire design, from layout to UI elements, was
          created by me, ensuring a seamless and responsive experience across
          PC, tablet, and mobile devices. The website was successfully deployed
          using cPanel hosting, ensuring reliability and smooth operation.
          <br></br>
        </>
        langs={["React", "JavaScript", "Firebase", "i18n"]}
      />
      <Card
        date="2025 - PRESENT"
        header="Front-End Developer - Georgian Geographical Institute"
        text={
          <>
            I am currently working on the first Georgian web atlas, a web
            application designed to visualize and interact with geospatial data.
            The Georgian Geographical Institute provided the geospatial
            datasets, which I convert into GeoJSON format for efficient
            rendering. The application allows users to toggle the visibility of
            different geographical layers, including lines and polygons,
            providing an interactive mapping experience. Performance
            optimization is a key focus, ensuring smooth handling of large
            datasets while maintaining responsiveness across devices. The
            project is built using modern web technologies, leveraging React
            Query, Redux, Firebase, and Vite to manage state, data fetching, and
            real-time updates. This web atlas aims to make geographical data
            more accessible and user-friendly for researchers, students, and the
            general public.
          </>
        }
        langs={[
          "React",
          "JavaScript",
          "GeoJSON",
          "React Query",
          "Redux",
          "Firebase",
          "Vite",
          "API",
        ]}
      />
    </div>
  );
};

export default Experience;
