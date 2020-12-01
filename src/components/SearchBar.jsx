import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchInput" data-testid="text-input-label">Inclui o texto:</label>
          <input
            id="searchInput"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
          <label
            htmlFor="checkboxInput"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
          </label>
          <input
            type="checkbox"
            id="checkboxInput"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
          <label
            htmlFor="selectInput"
            data-testid="select-input-label"
          >
            Filtrar por gênero
          </label>
          <select
            name="selectInput"
            id="selectInput"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </form>
      </div>);
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
