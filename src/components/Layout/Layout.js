import First from '../First/First'
import Skills from '../Skills/Skills'
import classes from './Layout.module.css'
const Layout = () => {
  return (
    <div className={classes.main}>
      <First/>
      <Skills/>
    </div>
  )
}

export default Layout
