import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
/*     const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props; */
    return {};
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.function.isRequired,
  bookmarkedOnly: PropTypes.boolean.isRequired,
  onBookmarkedChange: PropTypes.function.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.function.isRequired,
};

export default SearchBar;
