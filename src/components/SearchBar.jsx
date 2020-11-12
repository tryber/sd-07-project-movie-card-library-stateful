// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div className="search-bar">
        <form action="" data-testid="search-bar-form">

          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:

            <input
              type="text"
              name="search"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

          <label htmlFor="favoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos

            <input
              type="checkbox"
              name="favoritos"
              data-testid="checkbox-input"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;
