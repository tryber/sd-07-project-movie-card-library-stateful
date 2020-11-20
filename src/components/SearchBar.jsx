import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre,
      bookmarkedOnly,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-bar" data-testid="text-input-label">Inclui o texto:</label>
          <input
            name="searchText"
            id="search-bar"
            type="text"
            data-testid="text-input"
            onChange={onSearchTextChange}
            value={searchText}
          />

          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            id="bookmarkedOnly"
            name="bookmarkedOnly"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />

          <label htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <select
            id="selectedGenre"
            name="selectedGenre"
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
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
};
SearchBar.defaultProps = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
};
