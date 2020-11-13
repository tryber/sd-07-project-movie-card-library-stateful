import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return( <form actdata-testid="search-bar-form">
      <label data-testid="text-input-label">Inclui o texto:</label>
      <input
        type="text"
        data-testid="text-input"
        name="barra"
        value={searchText}
        onChange={onSearchTextChange}></input>
      <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
      <input
        type="checkbox"
        data-testid="checkbox-input"
        name="favorito"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}></input>
      <label data-testid="select-input-label">Filtrar por gênero</label>
      <select
        data-testid="select-input"
        name="genero"
        value={selectedGenre}
        onChange={onSelectedGenreChange}>
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </form>
    );
  }
}

export default SearchBar;
