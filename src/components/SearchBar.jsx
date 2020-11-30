import * as React from 'react';
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
      <div data-testid="search-bar-form">
        <form>
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              data-testid="text-input"
              onChange={onSearchTextChange}
              value={searchText}
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookMarked">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
          <label data-testid="select-input-label" htmlFor="selected-genre">
            Filtrar por gênero
            <select
              id="selected-genre"
              name="selected-genre"
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option data-testid="select-option" value="">
                Todos
              </option>
              <option data-testid="select-option" value="action">
                Ação
              </option>
              <option data-testid="select-option" value="comedy">
                Comédia
              </option>
              <option data-testid="select-option" value="thriller">
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
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
