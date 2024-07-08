import React from "react"; // Import React library to use React components and features

// Define the Review class component that extends React.Component
class Review extends React.Component {
  // Render method to display the component's UI
  render() {
    return (
      <div id="indv-review" className="card w-90 pb-2 mb-2"> {/* Container for an individual review with some styling classes */}
        <div className="card-header"> {/* Header section of the card */}
          <p><strong>{this.props.username}</strong></p> {/* Display the username in bold */}
        </div>
        <div className="card-body"> {/* Body section of the card */}
          {this.props.body} {/* Display the review body/content */}
          {this.props.rating && <p>Rating: {this.props.rating} stars</p>} {/* If rating exists, display the rating in stars */}
        </div>
      </div>
    );
  }
}

export default Review; // Export the Review component as the default export
