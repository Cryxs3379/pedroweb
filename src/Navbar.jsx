// src/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        top: 20, 
        padding: '10px 0',  // Hace la barra más ancha
        backgroundColor: '#333' // Puedes personalizar el color aquí si deseas
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'center', // Centrar el contenido horizontalmente
          gap: '20px' // Añadir espacio entre los botones
        }}
      >
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            fontSize: '1.8rem',  // Tamaño de letra más grande
            textAlign: 'center'  // Centra el título
          }}
        >
          Mi Portafolio
        </Typography>
        <Button 
          color="inherit" 
          component={Link} 
          to="/" 
          sx={{ fontSize: '1.2rem' }} // Aumenta el tamaño de las letras
        >
          Inicio
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/servicios" 
          sx={{ fontSize: '1.2rem' }} // Aumenta el tamaño de las letras
        >
          Servicios
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
