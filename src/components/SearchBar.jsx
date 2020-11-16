// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'propTypes';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
    <form data-testid='search-bar-form'>
      <label htmlFor='text-input' data-testid='text-input-label'>
        Inclui o texto
      <input id='text-input' data-testid='text-input' type='text' name='searchText'
      value={searchText} onChange={onSearchTextChange} />
    </label>
    </form>
    )
  }
}

export default SearchBar;
