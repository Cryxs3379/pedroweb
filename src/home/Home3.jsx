import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import mapImage from '../assets/map_image.png'; // Una captura estática del mapa

export const Home3 = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop:'-19%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          backgroundColor: '#dd9ac0',  // Mismo color de fondo que en Home1
          transform: 'rotate(-40deg)',  // Rotación inversa
          transformOrigin: 'top left',
          zIndex: -1,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        {/* Título */}
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '20px' }}>
          Localízanos
        </Typography>

        {/* Descripción */}
        <Typography variant="body1" sx={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          Nos encontramos en C. Peteneras, 3, 3b Carretera de Cádiz, 29006 Málaga.
        </Typography>

        {/* Mapa (imagen local estática de OpenStreetMap o similar) */}
        <Link
          href="https://www.google.com/maps/place/C.+Peteneras,+3,+3b,+Carretera+de+Cádiz,+29006+Málaga"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-block',
            marginTop: '20px',
          }}
        >
          {/* Imagen estática del mapa */}
          <Box
            component="img"
            src={mapImage}
            alt="Ubicación en Google Maps"
            sx={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Home3;

