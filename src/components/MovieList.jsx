import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies
          .filter(
            ({ title, subtitle, storyline }) =>
              title.includes(searchText) ||
              subtitle.includes(searchText) ||
              storyline.includes(searchText),
          )
          .filter(({ bookmarked }) => bookmarkedOnly ? bookmarked : true)
          .filter(({ genre }) => genre.includes(selectedGenre))
          .map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({ })),
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

MovieList.defaultProps = { movies: [] };
