import { useEffect, useState } from "react";
import classes from "./Content.module.css";

import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";

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
      {hash === "About" && <About />}
      {hash === "Experience" && <Experience />}
      {hash === "Projects" && <Projects />}
      {hash === "Skillset" && <p>This is the Skillset section.</p>}
    </div>
  );
};

export default Content;
