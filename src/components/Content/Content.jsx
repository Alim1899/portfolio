import { useEffect, useState } from "react";
import classes from "./Content.module.css";
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
      {hash === "About" && <p>This is the About section.</p>}
      {hash === "Experience" && <p>This is the Experience section.</p>}
      {hash === "Skillset" && <p>This is the Skillset section.</p>}
      {hash === "Projects" && <p>This is the Projects section.</p>}
    </div>
  );
};

export default Content;
