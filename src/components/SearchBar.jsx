import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      // onBookmarkedChange,
      selectedGenre,
      // onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <input
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
              type="text"
              name="searchText"
            />
          </label>
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              value={bookmarkedOnly}
              onChange={onSearchTextChange}
              data-testid="checkbox-input"
              type="checkbox"
              name="bookmarkedOnly"
            />
          </label>
          <label htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={selectedGenre}
              onChange={onSearchTextChange}
              data-testid="select-input"
              name="selectedGenre"
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
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  // onBookmarkedChange,
  selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange
};

export default SearchBar;
