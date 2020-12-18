import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
 
  render() {
    const { movies, searchText } = this.props;
    const filtraNome = ((movie) =>
    movie.title.includes(searchText) ||
    movie.subtitle.includes(searchText) ||
    movie.storyline.includes(searchText))

  console.log( searchText)
    return (
      <div data-testid="movie-list">
        {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        
      </div>
    );
  }
}

export default MovieList; 
