// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
      </form>
    );
  }
}

export default SearchBar;
