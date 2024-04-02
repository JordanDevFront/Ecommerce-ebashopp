// router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import MeusDados from "./page/MeusDados";
import Carrinho from "./page/Carrinho";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>}/>
        
        <Route path="/MeusDados" element={<MeusDados/>}/>
        <Route path="/Carrinho" element={<Carrinho/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
