// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {searchText,
          onSearchTextChange,
          bookmarkedOnly,
          onBookmarkedChange,
          selectedGenre,
          onSelectedGenreChange} = this.props

    return(
      <input type='text'></input>
    )
  }
}

export default SearchBar;
