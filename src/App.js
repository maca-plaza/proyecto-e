// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stepper from "./components/Stepper";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Energias from "./pages/Energias"
import Calculadora from "./pages/Energias/pages/Calculadora";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="energias" element={<Energias />}>
            <Route path="calculadora" element={<Calculadora />}/>
          </Route>

        </Routes>
      </BrowserRouter>
      {/* <h1>Stepper con Hojas de Árbol</h1>
      <Stepper /> */}
    </div>
  );
}
