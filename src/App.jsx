// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Servicios from './Servicios/Servicios';
import Home from './home/Home';  // Importamos Home
import Home1 from './home/Home1'; // Importamos Home1
import { Home2 } from './home/Home2';
import { Home3 } from './home/Home3';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />    {/* Renderizamos Home */}
              <Home1 />   {/* Renderizamos Home1 debajo de Home */}
              <Home2/>
              <Home3/>
              
              
            

            </>
          } 
        />
        <Route path="/servicios" element={<Servicios />} /> {/* Ruta para Servicios */}
      </Routes>
    </Router>
  );
};

export default App;
