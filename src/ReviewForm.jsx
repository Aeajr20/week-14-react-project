import React, { useState } from "react"; // Import React library and useState 

// Define the ReviewForm functional component 
const ReviewForm = ({ onSubmitReview, movieTitle }) => {
  // This initializes state variables for username, body, and rating using useState hook
  const [username, setUsername] = useState(""); // The useState is storing and updating username
  const [body, setBody] = useState(""); //  The useState is storing and updating body
  const [rating, setRating] = useState(""); //  The useState is storing and updating rating

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form behavior which would reload the page

    // Calls the onSubmitReview function passed with a object that contains the movieTitle, username, body, rating
    onSubmitReview({ movieTitle, username, body, rating });

    // This code resets the form fields after the submission 
    setUsername("");
    setBody("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form element with handleSubmit as the submit handler */}
      <h2> {movieTitle}</h2> {/* Display the movie title */}
      <div>
        <label>Username:</label> {/* Label for username input */}
        <input
          value={username} // links the input value to the username state
          onChange={(e) => setUsername(e.target.value)} // Update the username state on input change
        />
      </div>
      <div>
        <label>Review:</label> {/* Label for review body textarea */}
        <textarea
          value={body} // llinks the textarea value to the body state
          onChange={(e) => setBody(e.target.value)} // Update the body state on textarea change
        ></textarea>
      </div>
      <div>
        <label>Rating:</label> {/* Label for rating input */}
        <input
          value={rating} // links the input value to the rating state
          onChange={(e) => setRating(e.target.value)} // Update the rating state on input change
        />
      </div>
      <button type="submit">Submit</button> {/* Submit button */}
    </form>
  );
};

export default ReviewForm; // Export the ReviewForm component as the default export
