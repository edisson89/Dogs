import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({logout}) => {
  return (
    <div className={styles.nav}>
      
      <NavLink className={styles.navlink} to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink className={styles.navlink} to="/form">
        <button>Form</button>
      </NavLink>
      <NavLink className={styles.navlink} to="/about">
        <button>About</button>
      </NavLink>
      <button onClick={logout}>Logout</button>
      
    </div>
  );
};

export default Nav;
