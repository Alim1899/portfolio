import { useEffect, useState } from "react";
import classes from "./Content.module.css";
import Card from "./Card";
const Content = () => {
  const [hash, setHash] = useState(
    window.location.hash.substring(1) || "About"
  );
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.substring(1) || "About");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return (
    <div className={classes.content}>
      {hash === "About" && (
        <div className={classes.about}>
          <p>
            Experienced Front-End Developer specializing in <b>React</b>, with
            expertise in <b>React Query</b>, <b>JavaScript</b>,{" "}
            <b>Tailwind CSS</b>, and <b>Firebase</b>. I have built a content
            management website with an admin panel, integrating real-time data
            solutions for efficient management.
          </p>
          <p>
            Currently, I work as a freelancer for local companies and have a
            one-year contract with the <b>Georgian Geographical Institute</b>.
            Passionate about optimizing performance, enhancing UI/UX, and
            building scalable applications.
            <br></br>
            <br></br>I am currently developing the{" "}
            <b>first Georgian web atlas</b>, a large-scale project that involves
            handling extensive <b>geospatial data</b>, optimizing{" "}
            <b>map rendering</b>, and integrating <b>interactive features</b>.
          </p>
          <p>
            With a strong focus on state management and data handling, I have
            experience working with <b>Redux</b>, <b>IndexedDB</b>, and{" "}
            <b>Supabase</b>. My projects often involve handling large datasets,
            optimizing rendering performance, and ensuring smooth user
            interactions.
          </p>
          <p>
            Beyond coding, I have a deep passion for the outdoors. When I'm not
            in front of a screen, you'll find me <b>climbing</b>,{" "}
            <b>mountaineering</b>, or <b>hiking</b>, exploring remote landscapes
            and pushing my limits in the great outdoors. These experiences fuel
            my problem-solving mindset and adaptability, which I bring into my
            development work.
          </p>
        </div>
      )}
      {hash === "Experience" && (
        <div className={classes.experience}>
          <Card
            date="2023"
            header="Front-End Developer - Local Company"
            text=<>
              I was approached to create a website tailored to the specific
              needs of a client. The website was built with a focus on
              delivering a seamless user experience and meeting the client's
              requirements. After discussing the project goals, I crafted a
              fully functional site that fulfills the purpose of showcasing
              services. The website features a clean design, intuitive
              navigation, and is optimized for performance, ensuring both ease
              of use for visitors and smooth operation for the client
              <br></br>
              <a
                href="https://gentle-pika-603b9c.netlify.app/"
                target="_blank"
                rel="noopener"
              >
                Link
              </a>
            </>
            langs={["React", "JavaScript", "HTML&CSS"]}
          />
          <Card
            date="2024"
            header="Front-End Developer - Nueva"
            text=<>
              I developed and deployed a fully functional web application, with
              an integrated admin panel, allowing administrators to add, remove,
              and edit projects effortlessly. The website supports two
              languages, Georgian and English, ensuring accessibility for a
              wider audience. Each project includes its own set of images, and
              for optimal performance, projects are rendered one by one to
              enhance speed and user experience. The entire design, from layout
              to UI elements, was created by me, ensuring a seamless and
              responsive experience across PC, tablet, and mobile devices. The
              website was successfully deployed using cPanel hosting, ensuring
              reliability and smooth operation.
              <br></br>
              <a href="https://nueva.ge" target="_blank" rel="noopener">
                Link
              </a>
            </>
            langs={["React", "JavaScript", "Firebase", "i18n"]}
          />
        </div>
      )}
      {hash === "Skillset" && <p>This is the Skillset section.</p>}
      {hash === "Projects" && <p>This is the Projects section.</p>}
    </div>
  );
};

export default Content;
