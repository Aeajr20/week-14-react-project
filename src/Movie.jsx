import React from "react"; // Import React library
import Stars from "./Stars.jsx"; // Import the Stars component for displaying ratings
import ReviewList from "./ReviewList.jsx"; // Import the ReviewList component for displaying reviews
import ReviewForm from "./ReviewForm.jsx"; // Import the ReviewForm component for submitting new reviews

// Movie component which diplays a single movie along with its reviews and a form to add new reviews
const Movie = ({ movie, reviews, onSubmitReview }) => {
  // Filter reviews to only include those for the current movie
  const movieReviews = reviews.filter(review => review.movieTitle === movie.title);

  return (
    <div className="movie-item"> 
      <h2>{movie.title}</h2> {/* Display the movie title */}

      <p>Genres: {movie.genres.join(", ")}</p> {/* Display the movie genres, joined by a comma */}

      <Stars movieTitle={movie.title} /> {/* calls the Stars component for rating the movie */}

      <ReviewList reviews={movieReviews} /> {/* Render the ReviewList component with reviews filtered for this movie */}
      
      <ReviewForm onSubmitReview={onSubmitReview} movieTitle={movie.title} /> {/* Render the ReviewForm component, passing the onSubmitReview function and the movie title as props */}
    </div>
  );
};

export default Movie; // Export the Movie component as the default export
