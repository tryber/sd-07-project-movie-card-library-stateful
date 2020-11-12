// implement SearchBar component here
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
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="f">
          Inclui o texto
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            id="f"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="a">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            id="a"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="b">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            id="b"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}
// .isrequired

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
export default SearchBar;
