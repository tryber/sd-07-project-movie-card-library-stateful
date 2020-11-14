import React from 'react';

import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto
          <input
            name="searchText"
            type="text"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange} />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
        <input type="checkbox"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange} />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
        <select
            name="selectedGenre"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
