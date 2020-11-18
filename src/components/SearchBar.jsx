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
      <div className="movie-list">
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="searchText" data-testid="text-input-label">
              Inclui o texto:
              <input
                name="searchText"
                data-testid="text-input"
                value={searchText}
                onChange={onSearchTextChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
              <input
                type="checkbox"
                name="bookmarkedOnly"
                data-testid="checkbox-input"
                checked={bookmarkedOnly}
                onChange={onBookmarkedChange}
                data-key="bookmarkedOnly"
              />
            Mostrar somente favoritos
            </label>
          </div>
          <div>
            <label htmlFor="select-input" data-testid="select-input-label">
              Filtrar por gênero
              <select
                value={selectedGenre}
                onChange={onSelectedGenreChange}
                data-testid="select-input"
                name="selectedGenre"
                data-key="selectedGenre"
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
          </div>
        </form>
      </div>
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
