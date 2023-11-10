import React, { useEffect, useState } from 'react'
import styles from "./detail.module.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Detail = () => {
  const [dog, setDog] = useState();

  const { id } = useParams();
 
  useEffect(() => {
    axios   
      .get(`http://localhost:3001/dogdata/dogs/${id}`)
      .then(({data} ) => {
        
        if (data) {
          setDog(data.dbDog);
        } else {
          window.alert("no found");
        }
      });
   
  }, [id]);

  // async function detail(id) {
  //   const {data} =  await axios   
  //   .get(`http://localhost:3001/dogdata/dogs/${id}`) 
  // if (data) {
  //     console.log('dettaail',data)
  //     setDog(data.dbDog);
  //   } else {
  //     window.alert("No hay personajes con  ese id");
  //   }
  // }
  
  //   useEffect(() => {
  //     detail()
      
  //   }, [id]);

  return (
    <div className={styles.card}>
    <h1>{dog?.name}</h1>
    <h3>Bred for:{dog?.bred_for}</h3>
    <h4>Weight:{dog?.weight.imperial}</h4>
    <h4>Height:{dog?.height.imperial}</h4>
    <h4>id:{id}</h4>
    <h4>Breed group:{dog?.breed_group}</h4>
    <h4>Life_span:{dog?.life_span}</h4>
    <h4>Origin:{dog?.origin}</h4>
    <div className={styles.image}>

    <img alt={dog?.name} src={dog?.image.url} className={styles.img} />
    </div>
  </div>
  )
}

export default Detail