import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import Form from "./Form Page";
import Detail from "./Detail";
import About from "./About";
import Favorites from "./Favorites/favorites";
import Inicio from "./Inicio";

function App() {
  const [access, setAccess] = useState(true);
  const PASSWORD = "Testing123*";
  const EMAIL = "ejemplo123@gmail.com";

  const location = useLocation();
  const navigate = useNavigate();

  function login(input) {
    if (input.password === PASSWORD && input.email === EMAIL) {
      setAccess(true);
      navigate("/home");
      return alert("Ingreso Correcto");
    }
    return alert("Corrige tus datos");
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className={styles.App}>
      {location.pathname !== "/" ? (
        <Nav logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <Routes>
      <Route path="/inicio" element={<Inicio />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>

      <hr />
    </div>
  );
}

export default App;
