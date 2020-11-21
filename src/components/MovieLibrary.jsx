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
    this.searchTextChange = this.searchTextChange.bind(this);
  }
  searchTextChange({ target }){
    this.setState({
      name: value
    });
  }

  render() {
    return(
      <SearchBar
        searchText={this.state.searchText}
        onChange={this.searchTextChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
      />
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
