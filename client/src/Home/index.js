import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { addData, addHome } from "../Redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import CardDog from "../CardDog";

const Home = () => {
  const [id, setId] = useState("");
  const [localDogs, setlocalDogs] = useState();
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.home);
  // const data = useSelector((state) => state.data);

  function handleChange(event) {
    event.preventDefault();
    setId(event.target.value);
  }
  //Add dogs to data

  useEffect(() => {
    async function onData() {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/dogdata/dogs/dogs");

        setlocalDogs(data.result);

        dispatch(addData(data.result));
      } catch (error) {
        alert(error);
      }
    }
    onData();
  }, [localDogs, dispatch]);

  //Add dogs to home por id
  async function onSearch(id) {
    try {
      let { data } = await axios.get(
        `http://localhost:3001/dogdata/dogs/${id}`
      );

      dispatch(addHome(data));
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className={styles.home}>
      <div>
        <h1>Dogs</h1>
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
      <div>
        {localDogs &&
          localDogs
            .map(
              ({
                weight,
                height,
                id,
                name,
                bred_for,
                breed_group,
                life_span,
                origin,
                image,
              }) => {
                return (
                  <CardDog
                    key={id}
                    weight={weight}
                    height={height}
                    id={id}
                    name={name}
                    bred_for={bred_for}
                    breed_group={breed_group}
                    life_span={life_span}
                    origin={origin}
                    image={image}
                  />
                );
              }
            )
            .reverse()}
      </div>
      <div>
        {dogs &&
          dogs
            .map(
              ({
                weight,
                height,
                id,
                name,
                bred_for,
                breed_group,
                life_span,
                origin,
                image,
              }) => {
                return (
                  <CardDog
                    key={id}
                    weight={weight}
                    height={height}
                    id={id}
                    name={name}
                    bred_for={bred_for}
                    breed_group={breed_group}
                    life_span={life_span}
                    origin={origin}
                    image={image}
                  />
                );
              }
            )
            .reverse()}
      </div>
    </div>
  );
};

export default Home;
