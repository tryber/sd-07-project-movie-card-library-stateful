// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'propTypes';

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
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            id="text-input"
            data-testid="text-input"
            type="text"
            name="searchText"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <label htmlfor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            value={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>

        <label htmlfor="select-input" data-testid="select-input-label">
          <select
            id="select-input"
            data-testid="select-input"
            name="selectedGenre"
            value={selectedGenre}
            onChange={OnSelectedGenreChange}
          >
            Filtrar por gênero
            <option data-testid="select-opition" value="">
              Todos
            </option>
            <option data-testid="select-opition" value="action">
              Ação
            </option>
            <option data-testid="select-opition" value="comedy">
              Comédia
            </option>
            <option data-testid="select-opition" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}
SearBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
