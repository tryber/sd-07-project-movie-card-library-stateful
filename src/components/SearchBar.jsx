// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
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
        <label htmlFor="searchtext" data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          data-testid="text-input"
          name="searchtext"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />

        <label htmlFor="bookmarked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        <input
          data-testid="checkbox-input"
          name="bookmarked"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />

        <label htmlFor="selectedgenre" data-testid="select-input-label">
          Filtrar por gênero
        </label>
        <select
          data-testid="select-input"
          name="selectedgenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
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
