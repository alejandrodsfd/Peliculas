import React from 'react';
import { Helmet } from 'react-helmet-async';

export function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>Acerca de Nosotros - Películas</title>
        <meta name="description" content="Conoce más sobre nuestro sitio de películas y el equipo detrás de esta aplicación." />
      </Helmet>
      <h1>Acerca de Nosotros</h1>
      <p>Este es un sitio donde puedes explorar las mejores películas.</p>
    </div>
  );
}