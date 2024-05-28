// src/App.js

import React from 'react';
//import './App.css';
import Stepper from './components/Stepper';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <h1>Stepper con Hojas de Árbol</h1>
      <Navbar />
      <Stepper />
    </div>
  );
}
