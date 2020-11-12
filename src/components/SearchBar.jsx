import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-input" data-testid="text-input-label">Inclui o texto</label>
          <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} id="search-input" type="text"/>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input data-testid="checkbox-input" onChange={onBookmarkedChange} checked={bookmarkedOnly} type="checkbox"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;