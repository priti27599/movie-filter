import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import './style.css';
import { motion, AnimatePresence } from 'framer-motion';

/**'https://api.themoviedb.org/3/movie/popular?api_key=b3d2e555ef4c6c2c94d563d8a90fa262&language=en-US&page=1' */
export default function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=b3d2e555ef4c6c2c94d563d8a90fa262&language=en-US&page=1'
    );
    const data = await res.json();
    setPopular(data.results);
    setFiltered(data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <div className="app">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
