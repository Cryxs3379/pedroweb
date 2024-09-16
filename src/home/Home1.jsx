import React from 'react';
import { Typography, Box } from '@mui/material';
import backgroundImage from '../assets/home1.png'; // Importamos la imagen de fondo
import imageBox2 from '../assets/web.png'; // Imagen para caja 2
import imageBox3 from '../assets/realistic.png'; // Imagen para caja 3
import imageBox4 from '../assets/home1.png'; // Imagen para caja 4

const Home1 = () => {
  return (
    <Box 
      sx={{ 
        padding: '10px',  // Reducimos el padding general
        textAlign: 'center',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',  // Reducimos el tamaño del contenedor para que ocupe 20% menos
        backgroundColor: 'transparent',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          backgroundColor: '#dd9ac0',
          transform: 'rotate(-40deg)',
          transformOrigin: 'top left',
          zIndex: 1,
        },
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          zIndex: 1,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{
            fontSize: '2rem', // Reducimos ligeramente el tamaño del título
            textTransform: 'uppercase',
            letterSpacing: '1.5px', // Ajustamos el espaciado para no perder el impacto
            fontWeight: 'bold',
            marginBottom: '20px', // Reducimos el margen inferior
          }}
        >
          ¿Cómo podemos ayudarte a destacar en el mundo digital?
        </Typography>

        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '15px', // Reducimos el espacio entre las cajas
            gridTemplateAreas: `"box1 box2" "box1 box4" "box3 box4"`,
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '80px',  // Reducimos la altura mínima
          }}
        >
          <Box 
            sx={{
              gridArea: 'box1',
              backgroundColor: 'rgba(0, 0, 0, 0.0)',
              padding: '15px',  // Reducimos el padding
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '250px', // Reducimos la altura
              marginRight: '0px',
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
              Servicios
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#555' }}
            >
              Cada negocio es único, y en nuestra empresa lo entendemos perfectamente. Nos especializamos en crear páginas web personalizadas, desarrollar imágenes a medida que transmitan tu identidad y optimizar tu presencia en línea a través de estrategias SEO.
            </Typography>
          </Box>

          {/* Caja superior derecha (Caja 2) */}
          <Box 
            sx={{
              gridArea: 'box2',
              backgroundImage: `url(${imageBox2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px',  // Reducimos el padding
              minHeight: '180px',  // Ajustamos el tamaño
              color: '#fff',
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              },
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem', zIndex: 2 }}>
              Diseño y Desarrollo Web
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'center', zIndex: 2 }}>
              Creamos páginas web modernas, rápidas y adaptadas a las necesidades específicas de tu negocio, con un enfoque en la experiencia del usuario y la funcionalidad.
            </Typography>
          </Box>

          {/* Caja inferior izquierda (Caja 3) */}
          <Box 
            sx={{
              gridArea: 'box3',
              backgroundImage: `url(${imageBox3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px',
              minHeight: '180px', // Reducimos la altura
              color: '#fff',
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              },
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem', zIndex: 2 }}>
              Imágenes Personalizadas
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'center', zIndex: 2 }}>
              Diseñamos imágenes visualmente impactantes y completamente personalizadas, que reflejan tu marca y se adaptan a cualquier plataforma.
            </Typography>
          </Box>

          {/* Caja inferior derecha (Caja 4) */}
          <Box 
            sx={{
              gridArea: 'box4',
              backgroundImage: `url(${imageBox4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px',
              minHeight: '180px',  // Ajustamos el tamaño para que no deje mucho espacio
              color: '#fff',
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              },
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem', zIndex: 2 }}>
              Estrategias SEO
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'center', zIndex: 2 }}>
              Optimizamos tu sitio web para que sea fácilmente encontrado por los motores de búsqueda, maximizando tu visibilidad y atrayendo tráfico orgánico de calidad.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home1;


