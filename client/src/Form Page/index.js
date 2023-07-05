import React, { useState } from "react";
import styles from './form.module.css'

const Form = () => {
  const [form, setForm] = useState({
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
  const [error, setError] = useState({
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

  function validate(input) {
    const error = {};

    // if (!input.email) {
    //   error.email = "Debe haber un Email";
    // } else if (!input.password) {
    //   error.password = "Debe haber un Password";
    // } else if (!regexEmail.test(input.email)) {
    //   error.email = "Debe haber un Email valido";
    // } else if (!regexPassword.test(input.password)) {
    //   error.password = "Debe haber un Password valido";
    // }
    return error;
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = Object.keys(error);
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
      setError({
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
      // return login(input);
    }

    return alert("Error");
  };
  return (
    <div className  ={styles.form}>
      <h1>FORM BREEDS</h1>
      <form onSubmit={handleSubmit}>
        <label>Height Metric</label>
        <input
          value={form.height.metric}
          onChange={handleChange}
          name="form.height.metric"
          defaultValue={"Default"}
          placeholder="13 - 28"
        />
        <br></br>

        <label>Height Imperial</label>

        <input
          name="imperial"
          value={form.height.imperial}
          onChange={handleChange}
          placeholder="15 - 28"
        />
         <br></br>

        <label>Weight Metric</label>
        <input
          value={form.weight.metric}
          onChange={handleChange}
          name="form.weight.metric"
          placeholder="53 - 88"
          defaultValue={"Default"}
        />
         <br></br>
         <label>Weight Imperial</label>

        <input
          name="imperial"
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
