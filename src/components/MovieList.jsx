import React from "react";
import Movie from "./Movie.jsx";

export default class MovieList extends React.Component {
       
    render() {

        let movies = [{
            "title": "Avatar",
            "genres": ["Action", "Adventure", "Sci-Fi"],
            "actors": [
              {
                "name": "Sam Worthington",
                "age": 44,
                "netWorth": "30 million",
                "awards": ["Teen Choice Award", "Saturn Award"]
              },
              {
                "name": "Zoe Saldana",
                "age": 43,
                "netWorth": "35 million",
                "awards": ["ALMA Award", "Empire Award"]
              }
            ]
          },
          {
            "title": "Inception",
            "genres": ["Action", "Adventure", "Sci-Fi"],
            "actors": [
              {
                "name": "Leonardo DiCaprio",
                "age": 46,
                "netWorth": "260 million",
                "awards": ["Oscar", "Golden Globe"]
              },
              {
                "name": "Joseph Gordon-Levitt",
                "age": 40,
                "netWorth": "35 million",
                "awards": ["Primetime Emmy Award", "Screen Actors Guild Award"]
              }
            ]
          },
          {
            "title": "Transformers",
            "genres": ["Action", "Adventure", "Sci-Fi"],
            "actors": [
              {
                "name": "Shia LaBeouf",
                "age": 34,
                "netWorth": "25 million",
                "awards": ["Daytime Emmy Award"]
              },
              {
                "name": "Megan Fox",
                "age": 35,
                "netWorth": "8 million",
                "awards": ["Teen Choice Award"]
              }
            ]
          },
          {
            "title": "Thor: Ragnarok",
            "genres": ["Action", "Adventure", "Comedy"],
            "actors": [
              {
                "name": "Chris Hemsworth",
                "age": 37,
                "netWorth": "130 million",
                "awards": ["People's Choice Award", "Kids' Choice Award"]
              },
              {
                "name": "Tom Hiddleston",
                "age": 39,
                "netWorth": "25 million",
                "awards": ["Golden Globe", "Empire Award"]
              }
            ]
          },
          {
            "title": "Avengers: Age of Ultron",
            "genres": ["Action", "Adventure", "Sci-Fi"],
            "actors": [
              {
                "name": "Robert Downey Jr.",
                "age": 55,
                "netWorth": "300 million",
                "awards": ["Golden Globe", "Oscar Nomination"]
              },
              {
                "name": "Chris Evans",
                "age": 39,
                "netWorth": "80 million",
                "awards": ["People's Choice Award"]
              }
            ]
          },
          {
            "title": "Avengers: Endgame",
            "genres": ["Action", "Adventure", "Sci-Fi"],
            "actors": [
              {
                "name": "Robert Downey Jr.",
                "age": 55,
                "netWorth": "300 million",
                "awards": ["Golden Globe", "Oscar Nomination"]
              },
              {
                "name": "Chris Evans",
                "age": 39,
                "netWorth": "80 million",
                "awards": ["People's Choice Award"]
              }
            ]
          } // This closing bracket was missing
        ];

        return (
            <div className="movieList-data">
               {movies.map((movie, index) => {
                return <Movie movie={movie} key={index} />
               })}
            </div>
        )
    }
};
