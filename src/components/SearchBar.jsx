// implement SearchBar component here
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
        <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            name="searchText"
            id="searchText"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>

        <label htmlFor="selectedGenre" data-testid="select-input-label">Filtrar por gênero
          <select
            data-testid="select-input"
            name="selectedGenre"
            id="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
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
