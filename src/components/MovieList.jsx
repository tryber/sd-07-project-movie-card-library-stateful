import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const prop = this.props;
    const { movies } = prop;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
