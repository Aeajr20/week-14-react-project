import React from 'react';
import Movie from './Movie';
import moviesData from './info.json';

const MovieList = () => {
  return (
    <div>
      {moviesData.movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
