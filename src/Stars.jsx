import React, { useState } from "react"; // Import React and useState hook
import { FaStar } from "react-icons/fa"; // Import FaStar icon from react-icons/fa

const Stars = ({ movieTitle }) => {
  const [rating, setRating] = useState(null); // State for storing the selected rating
  const [hover, setHover] = useState(null); // State for tracking hover state

  // Function to handle when a star is clicked
  const handleRatingClick = (ratingValue) => {
    console.log(`Rated ${movieTitle} with ${ratingValue} stars`); // Log the rating selection
    setRating(ratingValue); // Update the rating state with the selected value
    // Optional: You can add code here to submit the rating to a backend or store it elsewhere
  };

  return (
    <div className="star-ratings"> {/* Container for star ratings */}
      {[...Array(5)].map((_, i) => { // Map over an array of length 5 to render stars
        const ratingValue = i + 1; // Calculate the current star's value

        return (
          <label key={i}> {/* Each star is wrapped in a label */}
            <input
              type="radio"
              className="radio-star-btn"
              name={movieTitle} // Use movieTitle as the input name for grouping
              value={ratingValue} // Set the value attribute of the input
              onClick={() => handleRatingClick(ratingValue)} // Handle click event to set rating
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#F3D511" : "E7DFDF"} // Change star color based on hover or selected rating
              size="30" // Set star size
              onMouseEnter={() => setHover(ratingValue)} // Handle mouse enter to set hover state
              onMouseLeave={() => setHover(null)} // Handle mouse leave to reset hover state
            />
          </label>
        );
      })}
      {rating && <p>Rating: {rating}</p>} {/* Display current rating if rating state is not null */}
    </div>
  );
};

export default Stars; // Export Stars component as default
