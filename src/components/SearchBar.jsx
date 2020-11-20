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
        <label
          htmlFor="incluiTexto"
          data-testid="text-input-label"
        >
            Inclui o texto
        </label>
        <input
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />

        <label htmlFor="fav" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />

        <label htmlFor="filtrar" data-testid="select-input-label">Filtrar por gênero</label>
        <select value={this.selectedGenre} onChange={this.onSearchTextChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

      </form>
    );
  }
}

SearchBar.protoTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
