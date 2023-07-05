import React, { useCallback, useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { addData, addHome, filter, order, reset } from "../Redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import CardDog from "../CardDog";
 

const Home = () => {
  const [id, setId] = useState("");
  const [loading,setLoading]= useState(false)
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
          "http://localhost:3001/dogdata/dogs"
        );
        setLoading(true)
        setlocalDogs(data.result);
        dispatch(addData(data.result));
        setLoading(false)
      } catch (error) {
        console(error);
      }
    }
    onData();
    
  }, [localDogs, dispatch]);

  //Add dogs to home por id
  const onSearch = useCallback(async(id) =>{
    try {
      const { data } = await axios.get(
        `http://localhost:3001/dogdata/dogs/${id}`
      );
      
      dispatch(addHome(data.dbDog));
    } catch (error) {
      console.log(error);
    }
  },[dispatch]);

 
 const handleOrder = (e) =>{
    e.preventDefault();
    const { value } = e.target;
    dispatch(order(value));
  }
  function handleFilter(e) {
    e.preventDefault();
    const { value } = e.target;
    dispatch(filter(value));
  }
  function resetBtn() {
    dispatch(reset());
  }
  useEffect((id) => {
    onSearch(id)
   }, [dogs,localDogs,onSearch,dispatch])
   
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
      <div>
     
          { !loading ?(localDogs &&
            localDogs
              .map(
                ({
                  
                  id,
                  name,
                  bred_for,
                  image,
                }) => {
                  return (
                    <CardDog
                      key={id}                     
                      id={id}
                      name={name}
                      bred_for={bred_for}
                      image={image.url}
                    />
                  );
                }
              )
              .reverse() ):(<div>loading...</div> )
              }
       
      </div>
      <div>
        
          {dogs &&
            dogs
              .map(
                ({
                  
                  id,
                  name,
                  bred_for,
                  image,
                  weight
                }) => {
                  return (
                    <CardDog
                    key={id}                     
                    id={id}
                    name={name}
                    bred_for={bred_for}
                    image={image.url}
                    weight={weight}
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
