// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      searchText,
      bookmarkedOnly,
      selectedGenre,
      } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="searchText"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label><br />
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={bookmarkedOnly}
            data-testid="checkbox-input"
            onChange={onBookmarkedChange}
          />
          Mostrar somente favoritos
        </label><br />
        <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero<br />
          <select
            name="selectedGenre"
            id="selectedGenre"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
            data-testid="select-input"
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
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
