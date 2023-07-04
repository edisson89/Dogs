import React from "react";
import styles from "./cardog.module.css";
import { NavLink } from "react-router-dom";

const CardDog = ({
  id,
  name,
  bred_for,
  image,
}) => {
  return (
    <div className={styles.card}>
       <NavLink to={`/detail/${id}`}>
      <h1>{name}</h1>
      <h3>Bred for:{bred_for}</h3>
          <div className={styles.image}>

      <img alt={name} src={image} className={styles.img} />
      </div>
      </NavLink>
    </div>
  );
};

export default CardDog;
