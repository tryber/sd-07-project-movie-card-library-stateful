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

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search-input">Inclui o texto:</label>
        <input
          data-testid="text-input"
          onChange={onSearchTextChange}
          value={searchText}
          type="text"
          name="search-input"
          id="search-input"
        />

        <input
          type="checkbox"
          name="favorite-input"
          id="favorite-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
        <label
          data-testid="checkbox-input-label"
          htmlFor="favorite-input"
        >Mostrar somente favoritos</label>

        <label htmlFor="filter-select" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          name="filter-select"
          id="filter-select"
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
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
}

export default SearchBar;
