import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi portfolio</h1>
      <p>Esta es mi página de inicio.</p>
      <Link to="/projects">Ver proyectos</Link>
      <Link to="/resume">Ver currículum</Link>
    </div>
  );
};

export default Home;