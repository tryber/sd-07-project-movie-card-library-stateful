import React, { Component } from 'react';
/* import PropTypes from 'prop-types';
import MovieList from './MovieList.jsx' */
import Form from './Form';

class SearchBar extends Component {
  render() {
    /* const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props; */
    return (
      <div>
        <Form searchText="My Text" />
      </div>
    );
  }
}

/* SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}; */

export default SearchBar;
