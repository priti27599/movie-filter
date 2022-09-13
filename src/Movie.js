import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <h2>{movie.original_title}</h2>
      <img
        src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
        alt={movie.original_title}
      />
    </motion.div>
  );
}

export default Movie;
