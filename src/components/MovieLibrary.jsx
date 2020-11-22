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

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <SearchBar
        searchText={this.state.searchText}
        onSearchChange={this.onChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.onChange}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.onChange}
      />
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
