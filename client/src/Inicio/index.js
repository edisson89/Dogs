import React from "react";
import { NavLink } from "react-router-dom";
import styles from './inicio.module.css'

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <h1>WELCOME TO DOGS PAGE</h1>
      <h3>A place  where your imagination will fly</h3>
      <NavLink to='/home'>
        <button className={styles.button}>Home</button>
      </NavLink>
    </div>
  );
};

export default Inicio;
