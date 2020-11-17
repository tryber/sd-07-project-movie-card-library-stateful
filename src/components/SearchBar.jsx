import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = { searchText: '' };
  }

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

        <div>
          <label data-testid="text-input-label" htmlFor="text-input-label">Inclui o texto:</label>
          <input
            data-testid="text-input"
            name="searchText"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            id="text-input-label"
          />
        </div>

        <div>
          <label data-testid="checkbox-input-label" htmlFor="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            checked={bookmarkedOnly}
            type="checkbox"
            onChange={onBookmarkedChange}
            id="checkbox-input-label"
          />
        </div>

        <div>
          <label data-testid="select-input-label" htmlFor="select-input-label">
            Filtrar por gênero
          </label>
          <select
            data-testid="select-input"
            name="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            id="select-input-label"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </div>

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
