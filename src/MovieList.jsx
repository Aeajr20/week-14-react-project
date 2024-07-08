import React from "react"; // This imports React library so that we can use React components and features
import Movie from "./Movie.jsx"; // Import the Movie component to display individual movie details

// Define the MovieList class component that extends React.Component
class MovieList extends React.Component {
  // Constructor method to initialize the component's state
  constructor(props) {
    super(props); // Call the parent class (React.Component) constructor with props
    // Initialize the state with a list of movies, each having a title and an array of genres
    this.state = {
      movies: [
        { title: "Avatar", genres: ["Action", "Adventure", "Sci-Fi"] },
        { title: "John Wick", genres: ["Action", "Adventure", "Thriller"] },
        { title: "Inception", genres: ["Action", "Adventure", "Sci-Fi"] },
        { title: "Transformers", genres: ["Action", "Adventure", "Sci-Fi"] },
        { title: "Thor: Ragnarok", genres: ["Action", "Adventure", "Comedy"] },
        { title: "Avengers: Age of Ultron", genres: ["Action", "Adventure", "Sci-Fi"] },
        { title: "Avengers: Endgame", genres: ["Action", "Adventure", "Sci-Fi"] }
      ],
    };
  }

  // Render method to display the component's UI
  render() {
    return (
      <div className="movieList-data"> {/* Container for the list of movies */}
        {/* Iterate over the movies array in the component's state using the map() function */}
        {this.state.movies.map((movie, index) => (
          // Render a Movie component for each movie object in the array
          <Movie
            movie={movie} /* Pass the movie object as a prop to the Movie component */
            key={index} /* Use index as a unique key for each Movie component */
            reviews={this.props.reviews} /* Pass down the reviews prop from the parent component */
            onSubmitReview={this.props.onSubmitReview} /* Pass down the onSubmitReview prop from the parent component */
          />
        ))}
      </div>
    );
  }
}

export default MovieList; // Export the MovieList component as the default export
//This allows components to be imported and used in other parts of the app