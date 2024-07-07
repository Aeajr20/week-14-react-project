import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Genres: {movie.genres.join(', ')}</p>
      <h3>Actors:</h3>
      {movie.actors.map((actor, index) => (
        <div key={index}>
          <p>{actor.name}, {actor.age} years old, net worth: {actor.netWorth}</p>
          <p>Awards: {actor.awards.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Movie;
