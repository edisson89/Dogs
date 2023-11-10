import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import Form from "./Form Page";
import Detail from "./Detail";
import About from "./About";
import Favorites from "./Favorites/favorites";
import Inicio from "./Inicio";
import axios from "axios";
import Register from "./Register";

function App() {
  const [access, setAccess] = useState(true);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const navigate = useNavigate();

  async function register(input) {
    const { data } = await axios.post(
      "http://localhost:3001/user/create",
      input
    );

    if (data.email && data.password) {
      
      return alert("Your user was registered");
    }
    return alert("Error change your dates");
  }

    async function login(input) {
      const { data } = await axios.post("http://localhost:3001/user/get/", input);
      if (data.user === 'validated') {
        
        setAccess(true);
        navigate("/inicio");
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
  }, [access, navigate, isRegisterVisible]);

  return (
    <div className={styles.App}>
      <Nav logout={logout} />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        {access ? (
          <>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </>
        ) : (
          <>
            {isRegisterVisible && (
              <Route path="/" element={<Register register={register}  setRegisterVisible={setRegisterVisible}/>} />
            )}
            <Route
              path="/"
              element={
                <Login
                  login={login}
                  isRegisterVisible={isRegisterVisible}
                  setRegisterVisible={setRegisterVisible}
                />
              }
            ></Route>
          </>
        )}
      </Routes>

      <hr />
    </div>
  );
}

export default App;

