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
        <form data-testid="search-bar-form">
          <br />
          <label
            htmlFor="text-input-label"
            data-testid="text-input-label"
          >
            Inclui o texto:
            <input
              id="text-input-label"
              data-testid="text-input"
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <br />
          <label
            htmlFor="checkbox-input-label"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="checkbox-input-label"
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
          <br />
          <label
            htmlFor="select-input-label"
            data-testid="select-input-label"
          >
            Filtrar por gênero
            <select
              id="select-input-label"
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option
                data-testid="select-option"
                value=""
              >Todos
              </option>
              <option
                data-testid="select-option"
                value="action"
              >Ação
              </option>
              <option
                data-testid="select-option"
                value="comedy"
              >Comédia
              </option>
              <option
                data-testid="select-option"
                value="thriller"
              >Suspense
              </option>
            </select>
          </label>
          <br />
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
