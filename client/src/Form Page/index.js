import React, { useState } from "react";
import styles from "./form.module.css";
import { useDispatch } from "react-redux";
import { addDb } from "../Redux/actions";


const Form = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
     id : 1000,
    height: {
      metric: "",
      imperial: "",
    },
    weight: {
      metric: "",
      imperial: "",
    },
    life_spa: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    height: {
      metric: "",
      imperial: "",
    },
    weight: {
      metric: "",
      imperial: "",
    },
    life_spa: "",
    name: "",
  });

  function validate(form) {
    const error = {};

    if (!form.life_spa) {
      error.life_spa = "Add a valid lifee_spa must not be null";
    } else if (!form.name) {
      error.name = "Add a valid date.Name must not be null";
    }
    return error;
  }

  const handleChange = (e) => {
   
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,

      // height: {
      //   ...prevForm.height,
      //   [name]: name === "height" ? value : prevForm.height[name],
      // },
      // weight: {
      //   ...prevForm.weight,
      //   [name]: name === "weight" ? value : prevForm.weight[name],
      // },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(errors);
    
    const aux = Object.keys(validationErrors);
    if (aux.length === 0) {
      setForm({
        height: {
          metric: "",
          imperial: "",
        },
        weight: {
          metric: "",
          imperial: "",
        },
        life_spa: "",
        name: "",
      });
      setErrors({
        height: {
          metric: "",
          imperial: "",
        },
        weight: {
          metric: "",
          imperial: "",
        },
        life_spa: "",
        name: "",
      });
      //add redux
        dispatch(addDb(form))
    }
     
    return alert("Error");
  };
  return (
    <div className={styles.form}>
      <h1>FORM BREEDS</h1>
      <form onSubmit={handleSubmit}>
        <label>Height Metric</label>
        <input
          value={form.height.metric}
          onChange={handleChange}
          name="height"
          placeholder="13 - 28"
        />
        
       

        <br></br>

        <label>Height Imperial</label>

        <input
          name="height"
          value={form.height.imperial}
          onChange={handleChange}
          placeholder="15 - 28"
        />
        <br></br>

        <label>Weight Metric</label>
        <input
          value={form.weight.metric}
          onChange={handleChange}
          name="weight"
          placeholder="53 - 88"
        />
        <br></br>
        <label>Weight Imperial</label>

        <input
          name="weight"
          value={form.weight.imperial}
          placeholder="18 - 29"
          onChange={handleChange}
        />
        <br></br>

        <label>Life Spa</label>
        <input
          name="life_spa"
          value={form.life_spa}
          placeholder="10 - 13 years"
          onChange={handleChange}
        />
        <br></br>

        <label>name</label>
        <input
          name="name"
          value={form.name}
          placeholder="name"
          onChange={handleChange}
        />

        <br></br>
        {errors.name && <div>{errors.name}</div>}
        <button type="submit">Add breed</button>
      </form>
    </div>
  );
};

export default Form;

/*
Nombre.
-  Altura **(diferenciar entre altura mínima y máxima de la raza)**.
-  Peso **(diferenciar entre peso mínimo y máximo de la raza)**.
-  Años de vida.
-  Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
-  Botón para crear la nueva raza
*/
