import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { addData, addHome, filter, order, reset } from "../Redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import CardDog from "../CardDog";

const Home = () => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.home);

  function handleChange(event) {
    event.preventDefault();
    setId(event.target.value);
  }
  //Add dogs to data

  useEffect(() => {
    async function onData() {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:3001/dogdata/dogs/");
        if (data) {
          dispatch(addData(data.result));
        }
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    onData();
  }, [dispatch]);

  //Add dogs to home por id
 async function onSearch (id){
      try {
        console.log('se ejeecuto  mieerd')
        const dataId = dogs.find((dog) => dog.id === id);
        console.log(dataId)
        if (!dataId) {
          const { data } = await axios.get(
            `http://localhost:3001/dogdata/dogs/${id}`
          );

          dispatch(addHome(data.dbDog));
        } else {
          alert("Data exist already");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  // useEffect(() => {
  //   let isMounted = true;
  //   onSearch(id).then(() => {
  //     // Comprobamos si el componente sigue montado antes de actualizar el estado.
  //     if (isMounted) {
  //       setLoading(false);
  //     }
  //   });
  //   // Clean-up para cancelar tareas asincrónicas cuando el componente se desmonte.
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [id, onSearch]);

  const handleOrder = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(order(value));
  };
  function handleFilter(e) {
    e.preventDefault();
    const { value } = e.target;
    dispatch(filter(value));
  }
  function resetBtn() {
    dispatch(reset());
  }
 
  return (
    <div className={styles.home}>
      <div>
        <h1>Dogs</h1>
        <select onChange={handleOrder} name="order" defaultValue={"Default"}>
          <option value="Default" disabled>
            Select Order
          </option>
          <option value="Ascendent">Ascendent</option>
          <option value="Descendent">Descendent</option>
        </select>

        <select onChange={handleFilter} name="filter" defaultValue={"Default"}>
          <option value="Default" disabled>
            Select Filter
          </option>
          <option value="name">Name</option>
          <option value="weigth">Weight</option>
          <option value="origin">Origin</option>
        </select>

        <button onClick={resetBtn}>Reset</button>
        <input
          onChange={handleChange}
          type="search"
          name="search"
          value={id}
          placeholder="write breed"
        />
        <button onClick={() => onSearch(id)} type="submit">
          onSearch{" "}
        </button>
      </div>
      {/* <div>
        {!loading ? (
          localDogs &&
          localDogs
            .map(({ id, name, bred_for, image }) => {
              return (
                <CardDog
                  key={id}
                  id={id}
                  name={name}
                  bred_for={bred_for}
                  image={image.url}
                />
              );
            })
            .reverse()
        ) : (
          <div>loading...</div>
        )}
      </div> */}
      <div className={styles.homespin}>
        {loading ? (
          <div className={styles.spinner}></div>

        ) : (
          dogs
            .map(({ id, name, bred_for, image, weight }) => {
              return (
                <CardDog
                  key={id}
                  id={id}
                  name={name}
                  bred_for={bred_for}
                  image={image.url}
                  weight={weight.metric}
                />
              );
            })
            .reverse()
        )}
      </div>
    </div>
  );
};

export default Home;
