import React from "react"; // Import React to create components
import Review from "./Review.jsx"; // Import the Review component

// ReviewList component takes in reviews as a prop
const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list"> {/* Container for the list of reviews */}
      {reviews.map((review, index) => ( // Loop through each review in the reviews array
        <Review 
          key={index} // Unique key for each review (using the index)
          username={review.username} // Pass the username to the Review component
          body={review.body} // Pass the review body to the Review component
          rating={review.rating} // Pass the rating to the Review component
        />
      ))}
    </div>
  );
};

export default ReviewList; // Export the ReviewList component so it can be used in other files
