import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
          </label>

          <input
            id="text-input"
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />

          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            type="checkbox"
            id="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />

          <label htmlFor="gener-input" data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <select
            id="gener-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
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
