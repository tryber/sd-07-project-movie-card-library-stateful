import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies
          .filter((movie) => {
            if (bookmarkedOnly === false) {
              return true;
            }
            return movie.bookmarked;
          })
          .filter((movie) => {
            if (searchText === '') {
              return true;
            }
            return (
              movie.title.toUpperCase().includes(searchText.toUpperCase()) ||
              movie.subtitle.toUpperCase().includes(searchText.toUpperCase()) ||
              movie.storyline.toUpperCase().includes(searchText.toUpperCase())
            );
          })
          .filter((movie) => {
            if (selectedGenre === '') {
              return true;
            }else{
              return movie.genre === (selectedGenre)

            }
          })
          .map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
      </div>
    );
  }
}

export default MovieList;
