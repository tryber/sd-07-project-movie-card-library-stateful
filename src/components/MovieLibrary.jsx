// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  addNewMovie(movie) { this.setState({ movies: [...this.state.movies, movie] }) };

  handleChange({ target: { checked, name, type, value } }) {
    const fieldValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: fieldValue });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.handleChange}
          onBookmarkedChange={this.handleChange}
          onSelectedGenreChange={this.handleChange}
        />

        <MovieList
          movies={this.state.movies}
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />

        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.shape({ })) };

MovieLibrary.defaultProps = { movies: [] };
