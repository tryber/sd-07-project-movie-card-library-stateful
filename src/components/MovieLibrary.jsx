// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  render() {
    return (
      <div>
        <SearchBar movies={this.props.movies} />
        <MovieList movies={this.props.movies} />
        <AddMovie />

      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
