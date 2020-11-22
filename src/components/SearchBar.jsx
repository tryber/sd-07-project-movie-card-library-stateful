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

        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <div>
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
          <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
          </label>
        </div>
      </form>
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
