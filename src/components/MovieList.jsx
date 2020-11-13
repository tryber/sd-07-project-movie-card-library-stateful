import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const p = this.props;
    const filmes = p.movies;
    return (
      <div data-testid="movie-list" className="movie-list">
        {filmes.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
