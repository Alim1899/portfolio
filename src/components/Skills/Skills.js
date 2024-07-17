import React from 'react'
import classes from './Skills.module.css'
import js from '../../assets/skills/js.svg';
import css from '../../assets/skills/css.svg';
import html from '../../assets/skills/html.svg';
import firebase from '../../assets/skills/firebase.svg';
import mongo from '../../assets/skills/mongo.svg';
import github from '../../assets/skills/github.svg';
import tailwind from '../../assets/skills/tailwind.svg';
import logo from '../../assets/skills/logo.svg'
import figma from '../../assets/skills/figma.svg'
import ps from '../../assets/skills/ps.svg'
import ai from '../../assets/skills/ai.svg'





const Skills = () => {
  return (
    <div className={classes.main}>
    <h2 className={classes.header}>My Skillet:</h2>   
    <div className={classes.skillset}>
        <div className={classes.skill}>
          <img className={classes.logo} src={html} alt='skill'></img>
          <h2>HTML5</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={css} alt='skill'></img>
          <h2>CSS3</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={js} alt='skill'></img>
          <h2>JavaScript</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={logo} alt='skill'></img>
          <h2>React</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={firebase} alt='skill'></img>
          <h2>Google Firebase</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={mongo} alt='skill'></img>
          <h2>MongoDB</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={github} alt='skill'></img>
          <h2>GIT & Github</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={tailwind} alt='skill'></img>
          <h2>Tailwind.CSS</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={figma} alt='skill'></img>
          <h2>Figma</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={ai} alt='skill'></img>
          <h2>PhotoshopCC</h2>
        </div>
        <div className={classes.skill}>
          <img className={classes.logo} src={ps} alt='skill'></img>
          <h2>IllustratorCC</h2>
        </div>
    </div>   
    </div>
  )
}

export default Skills
