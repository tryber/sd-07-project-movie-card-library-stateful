import React from 'react';
import PropTypes from 'prop-types';
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
            }
            return movie.genre === selectedGenre;
          })
          .map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default MovieList;
