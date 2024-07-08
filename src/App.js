import React, { useState } from "react"; // Import React and the useState hook from React library
import "./App.css"; // Import the CSS file for styling
import MovieList from "./MovieList.jsx"; // Import the MovieList component
import ReviewList from "./ReviewList.jsx"; // Import the ReviewList component
import ReviewForm from "./ReviewForm.jsx"; // Import the ReviewForm component

function App() {
  const [reviews, setReviews] = useState([]); // Define a state variable 'reviews' to store the list of reviews, initialized as an empty array

  // Function to handle the submission of a new review
  const handleSubmitReview = (review) => {
    const updatedReviews = [...reviews, review]; // Create a new array with the existing reviews and the new review
    setReviews(updatedReviews); // Update the state with the new array of reviews
  };

  return (
    <div className="App"> {/* Main container for the app */}
      <h1 class="h1">Movies</h1> {/* Header for the movie list */}
      <MovieList reviews={reviews} onSubmitReview={handleSubmitReview} /> {/* Render the MovieList component and pass down the reviews and the handleSubmitReview function as props */}
      <h1>Reviews</h1> {/* Header for the reviews section */}
      <ReviewList reviews={reviews} /> {/* Render the ReviewList component and pass down the reviews as a prop */}
      <h1>Add a Review</h1> {/* Header for the review form */}
      <ReviewForm onSubmitReview={handleSubmitReview} /> {/* Render the ReviewForm component and pass down the handleSubmitReview function as a prop */}
    </div>
  );
}

export default App; // Export the App component as the default export
