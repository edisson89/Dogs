import React, { useState } from "react";
import styles from "./register.module.css";
import { NavLink } from "react-router-dom";

const Register= ({ register, setRegisterVisible }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "  ",
    password: "",
  });

  const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

  function validate(input) {
    const error = {};

    if (!input.email) {
      error.email = "Debe haber un Email";
    } else if (!input.password) {
      error.password = "Debe haber un Password";
    } else if (!regexEmail.test(input.email)) {
      error.email = "Debe haber un Email valido";
    } else if (!regexPassword.test(input.password)) {
      error.password = "Debe haber un Password valido";
    }
    return error;
  }

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const aux = Object.keys(error);
    if (aux.length === 0) {
      setInput({
        email: "",
        password: "",
      });
      setError({
        email: "",  
        password: "",
      });
      
      return register(input);
    };

    return alert("Error");
  }
  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.loginInput}>Email:</label>
        <br />
        <input
          className={styles.loginInput}
          value={input.email}
          name="email"
          onChange={handleChange}
          placeholder="Ingrese su Email"
        />
        <br />

        {error.email && <p className={styles.error}>{error.email}</p>}

        <label className={styles.loginInput} name="password">
          Password:
        </label>
        <br />
        <input
          className={styles.loginInput}
          name="password"
          onChange={handleChange}
          value={input.password}
          placeholder="password"
        />
        <br />

        {error.password && <p className={styles.error}>{error.password}</p>}
        <br />
        {Object.keys(error).length === 0 ? (
          
            <button type="submit">Register</button>
          
        ) : (
          <h2>Register </h2>
        )}
      </form>
      <div className={styles.btnRegister}>
        <NavLink to='/'>
        <button  onClick={()=>setRegisterVisible(false)}>Back Login</button>
      </NavLink>
      </div>
      
    </div>
  );
};

export default Register;