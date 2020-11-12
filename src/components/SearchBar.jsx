import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre,
      searchText,
      bookmarkedOnly,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <fieldset>
          <label htmlFor="text-input-label" data-testid="text-input-label">Inclui o texto:</label>
          <input
            name="text-input-label"
            id="text-input-label"
            type="text"
            onChange={onSearchTextChange}
            value={searchText}
            data-testid="text-input"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            id="checkbox-input"
            name="checkbox-input"
            data-testid="checkbox-input"
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
            type="checkbox"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="selectedGenre" data-testid="select-input-label">Filtrar por gênero</label>
          <select
            id="selectedGenre"
            name="selectedGenre"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            type="select"

          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.func.isRequired,
  searchText: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
};
