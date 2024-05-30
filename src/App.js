// src/App.js


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Eficiencia from "./pages/Eficiencia";
import Calculadora from "./pages/Calculadora" ;
import Residuos from "./pages/Residuos";
import Energias from "./pages/Energias";
import Climatico from "./pages/Energias/pages/Climatico";
import Climatiza from "./pages/Energias/pages/Climatiza";
import Marina from "./pages/Energias/pages/Marina";
import Solar from "./pages/Energias/pages/Solar";
import Productos from "./pages/Productos" ;
import Footer from "./components/Footer";
import "./style.css";



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path= "eficiencia" element ={ <Eficiencia />}/>
          <Route path= "calculadora" element ={ <Calculadora />}/>
          <Route path= "residuos" element ={ <Residuos />}/>
          <Route path="energias" element={<Energias />}>
            <Route path="climatico" element={<Climatico />}/>
            <Route path="climatiza" element={<Climatiza />}/>
            <Route path="marina" element={<Marina />}/>
            <Route path="solar" element={<Solar />}/>
          </Route>
          <Route path="productos" element={<Productos />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <h1>Stepper con Hojas de Árbol</h1>
      <Stepper /> */}
    </div>
  );
}
