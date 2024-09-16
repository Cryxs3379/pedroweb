import React from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate para redireccionar
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import backgroundImage from '../assets/homeprueba.png'; // Asegúrate de que la imagen esté en la ruta correcta

export const Home2 = () => {
  const navigate = useNavigate();  // Hook para la redirección

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        marginTop: '-11.5%',
      }}
    >
      {/* Contenedor principal que divide el Box en 2 columnas */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',  // Dividimos el espacio en dos columnas iguales
          gap: '40px',                     // Espacio entre las dos columnas
          width: '100%',
          maxWidth: '1200px',              // Máximo ancho del contenido
        }}
      >
        {/* Columna izquierda: Contenido actual */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '20px' }}>
            ¿Tienes dudas sobre nuestros servicios?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.5rem', maxWidth: '800px' }}>
            Sabemos que cada negocio tiene necesidades únicas, y es posible que te surjan algunas preguntas antes de empezar. Aquí hemos reunido las respuestas a las preguntas más comunes que recibimos sobre la creación de páginas web, la generación de imágenes personalizadas y nuestras estrategias de SEO.
          </Typography>
        </Box>

        {/* Columna derecha: Accordion con 4 preguntas */}
        <Box>
          {/* Accordion 1 */}
          <Accordion sx={{ backgroundColor: 'transparent', color: '#fff', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />} aria-controls="panel1a-content" id="panel1a-header" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>¿Qué incluye el servicio de creación de páginas web?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'transparent' }}>
              <Typography>
                Ofrecemos un servicio completo que incluye el diseño y desarrollo de la página web, adaptada a las necesidades de tu negocio. Además, nos aseguramos de que tu web sea rápida, segura, y fácil de usar en dispositivos móviles. También integramos elementos clave para optimizar el SEO desde el principio.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2 */}
          <Accordion sx={{ backgroundColor: 'transparent', color: '#fff', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />} aria-controls="panel2a-content" id="panel2a-header" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>¿Las imágenes que crean son personalizadas?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'transparent' }}>
              <Typography>
                Sí, todas las imágenes que creamos son 100% personalizadas para tu marca o proyecto. Nos aseguramos de que cada imagen refleje tu identidad visual y sea única. Puedes solicitar cualquier estilo o concepto que tengas en mente, y adaptamos las imágenes para diferentes plataformas.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 3 */}
          <Accordion sx={{ backgroundColor: 'transparent', color: '#fff', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />} aria-controls="panel3a-content" id="panel3a-header" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>¿Qué necesito proporcionar para empezar?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'transparent' }}>
              <Typography>
                Para comenzar, necesitamos información clave sobre tu negocio, como tu identidad visual (logotipos, colores, etc.), el contenido que deseas incluir en la web, y una idea clara de tus objetivos. Si no tienes todo preparado, te ayudaremos a organizarlo y guiarte en el proceso.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Frase con enlace debajo del acordeón */}
          <Box sx={{ marginTop: '20px', position: 'relative', zIndex: 10 }}>  {/* Aseguramos que el zIndex sea superior */}
            <Link
              component="button"
              variant="body1"
              onClick={() => navigate('/servicios')}  // Redirige a /servicios
              sx={{
                color: 'white', // Color del enlace
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              ¿Tienes más dudas? haz click aquí para resolverlas
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
