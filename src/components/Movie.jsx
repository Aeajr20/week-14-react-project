import React, { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

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
      <Stars />
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default Movie;
