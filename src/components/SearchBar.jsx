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
      onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
          </label>
          <input
            id="searchText"
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </div>
        <div>
          <input
            id="bookmarkedOnly"
            data-testid="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
        </div>
        <div>
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
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
        </div>
      </form>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => undefined,
  bookmarkedOnly: false,
  onBookmarkedChange: () => undefined,
  selectedGenre: '',
  onSelectedGenreChange: () => undefined,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
