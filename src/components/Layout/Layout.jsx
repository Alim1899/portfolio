import Content from "../Content/Content";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <Content />
    </div>
  );
};

export default Layout;
