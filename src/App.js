// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Eficiencia from "./pages/Eficiencia";
import Calculadora from "./pages/Calculadora";
import Residuos from "./pages/Residuos";
import Mail from "./pages/Mail";
import Energias from "./pages/Energias";
import Climatico from "./pages/Energias/pages/Climatico";
import Climatiza from "./pages/Energias/pages/Climatiza";
import Marina from "./pages/Energias/pages/Marina";
import Solar from "./pages/Energias/pages/Solar";
import Productos from "./pages/Productos";
import Footer from "./components/Footer";
import "./style.css";
import Producto from "./pages/Productos/Producto";
import Categoria from "./pages/Productos/Categoria";
import LoginButton from "./components/LoginButton";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="eficiencia" element={<Eficiencia />} />
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="mail" element={<Mail />} />
          <Route path="residuos" element={<Residuos />} />
          <Route path="energias" element={<Energias />}>
            <Route path="climatico" element={<Climatico />} />
            <Route path="climatiza" element={<Climatiza />} />
            <Route path="marina" element={<Marina />} />
            <Route path="solar" element={<Solar />} />
          </Route>
          <Route path="productos" element={<Productos />}></Route>
          <Route path="productos/categoria/:category" element={<Categoria />} />
          <Route path="producto/:id" element={<Producto />} />
        </Routes>
        <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />}/>
      </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
