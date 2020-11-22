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

          <label htmlFor="text" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text"
              data-testid="text-input"
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="checkbox"
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>

          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="genre"
              data-testid="select-input"
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
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
