import React from "react";
import { NavLink } from "react-router-dom";
import styles from './inicio.module.css'

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <NavLink to='/home'>
        <button className={styles.button}>Home</button>
      </NavLink>
    </div>
  );
};

export default Inicio;
