// src/servicios/Servicios.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Servicios = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5, textAlign: 'center' }}> {/* Espaciado superior y centrado del texto */}
        <Typography variant="h2" component="h1" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Typography variant="body1">
          Ofrecemos una amplia gama de servicios de desarrollo web y creación de imágenes.
        </Typography>
      </Box>
    </Container>
  );
};

export default Servicios;
