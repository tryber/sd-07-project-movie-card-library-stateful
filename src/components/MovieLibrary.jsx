// implement MovieLibrary component here
import React from "react";
import MovieCard from "./MovieCard";

class MovieLibrary extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className='movie-list'>
        {movies.map((actual) => (
          <MovieCard movie={actual} key={actual.title} />
        ))}
      </div>
    );
  }
}

export default MovieLibrary;
