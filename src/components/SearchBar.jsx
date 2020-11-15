// implement SearchBar component here

import React, { Component } from 'react';

class SearchBar extends Component {
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
      <div>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            htmlFor="search-input"
          >Inclui o texto:
          </label>
          <input
            data-testid="text-input"
            onChange={onSearchTextChange}
            type="text"
            id="search-input" value={searchText}
          />

          <label
            data-testid="checkbox-input-label"
            htmlFor="favorits-input"
          >Mostrar somente favoritos</label>
          <input
            id="favorits-input"
            data-testid="checkbox-input"
            onChange={onBookmarkedChange}
            type="checkbox"
            checked={bookmarkedOnly}
          />

          <label
            data-testid="select-input-label"
            htmlFor="select-gender"
            value={selectedGenre}
          >Filtrar por gênero
          </label>

          <select
            id="select-gender"
            data-testid="select-input"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
          >
            <option
              data-testid="select-option"
              value=""
            >Todos</option>
            <option
              data-testid="select-option"
              value="action"
            >Ação</option>
            <option
              data-testid="select-option"
              value="comedy"
            >Comédia</option>
            <option
              data-testid="select-option"
              value="thriller"
            >Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
