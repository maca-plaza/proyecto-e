// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Eficiencia from "./pages/Eficiencia";
import Residuos from "./pages/Residuos";
import Energias from "./pages/Energias";
import Calculadora from "./pages/Energias/pages/Calculadora";
import Productos from "./pages/Productos" ;
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path= "eficiencia" element ={ <Eficiencia />}/>
          <Route path= "residuos" element ={ <Residuos />}/>
          <Route path="energias" element={<Energias />}>
            <Route path="calculadora" element={<Calculadora />}/>
            <Route path="productos" element={<Productos />}/>
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <h1>Stepper con Hojas de Árbol</h1>
      <Stepper /> */}
    </div>
  );
}
