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
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
          </label>
          <input
            type="text"
            name="searchText"
            id="searchText"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />

          <label data-testid="checkbox-input-label" htmlFor="checkbox-bookmarked">
            Mostrar somente favoritos
          </label>
          <input
            type="checkbox"
            id="checkbox-bookmarked"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />

          <label data-testid="select-input-label" htmlFor="selected-gender">
            Filtrar por gênero
          </label>
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            id="selected-gender"
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
