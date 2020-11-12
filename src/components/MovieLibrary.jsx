import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText={''}
          onSearchTextChange={() => { }}
          bookmarkedOnly={false}
          onBookmarkedChange={() => { }}
          selectedGenre={''}
          onSelectedGenreChange={() => { }}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={() => { }} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
