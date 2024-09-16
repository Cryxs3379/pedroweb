// src/home/Home.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import homeBackground from '../assets/homehome.png'; // Importamos la imagen de fondo
import serviceImage from '../assets/collage1.png'; // Importamos la nueva imagen

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        color: '#000000',
        padding: '50px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        
      }}
    >
      {/* Box de la izquierda (65%) */}
      <Box
        sx={{
          flex: '0 0 65%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingRight: '20px',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '3rem' }}>
          Diseño Web,<br /> Imágenes Personalizadas<br /> y SEO para tu Negocio
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          Cada empresa es única, por lo que tu página web debe reflejar esa singularidad. Nos especializamos en la creación de páginas web a medida, diseñadas específicamente para tus necesidades y objetivos de negocio. Ya sea que necesites un sitio web moderno, elegante o una plataforma funcional y dinámica, trabajamos estrechamente contigo para garantizar que tu visión se haga realidad.
        </Typography>
      </Box>

      {/* Box de la derecha (35%) */}
      <Box
        sx={{
          flex: '0 0 35%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '20px',
        }}
      >
        {/* <Typography variant="h4" component="h4" gutterBottom>
          Servicios Adicionales
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          Además de la creación de sitios web, ofrecemos servicios de optimización SEO, integración de plataformas de marketing y <br /> diseño gráfico personalizado para garantizar una presencia digital sólida.
        </Typography> */}

        {/* Imagen agregada con control de tamaño y posición */}
        <Box
          component="img"
          src={serviceImage}
          alt="Servicios"
          sx={{
            width: '100%',   // Controla el ancho de la imagen
            height: 'auto',  // Mantiene las proporciones de la imagen
            marginTop: '20px',  // Añade espacio superior
            alignSelf: 'center', // Centra la imagen horizontalmente
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;




