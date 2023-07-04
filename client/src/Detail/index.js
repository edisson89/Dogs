import React from 'react'
import styles from "./detail.module.css";
import { useSelector } from 'react-redux';


const Detail = () => {
 const home = useSelector((state) => state.home[0]);
 const {
  weight,
  height,
  id,
  name,
  bred_for,
  breed_group,
  life_span,
  origin,
  image,
} = home
console.log('esta edataa',home)
  return (
    <div className={styles.card}>
    <h1>{name}</h1>
    <h3>Bred for:{bred_for}</h3>
    <h4>Weight:{weight.imperial}</h4>
    <h4>Height:{height.imperial}</h4>
    <h4>id:{id}</h4>
    <h4>Breed group:{breed_group}</h4>
    <h4>Life_span:{life_span}</h4>
    <h4>Origin:{origin}</h4>
    <div className={styles.image}>

    <img alt={name} src={image.url} className={styles.img} />
    </div>
  </div>
  )
}

export default Detail