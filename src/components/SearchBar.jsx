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
      <div>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
          </label>
          <input
            type="text"
            name=""
            value={searchText}
            onChange={onSearchTextChange}
            id="searchText"
            data-testid="text-input"
          />
          <label htmlFor="check" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            type="checkbox"
            name=""
            id="check"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
          <label htmlFor="select" data-testid="select-input">
            Filtrar por gênero
          </label>
          <select
            name=""
            id="select"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input" 
          >
            <option value="" data-testid="selected-option">
              Todos
            </option>
            <option value="action" data-testid="selected-option">
              Ação
            </option>
            <option value="comedy" data-testid="selected-option">
              Comédia
            </option>
            <option value="thriller" data-testid="selected-option">
              Suspense
            </option>
          </select>
        </form>
      </div>
    );
  }
}

SearchBar.PropTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired
}

export default SearchBar;
