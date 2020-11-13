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
      <form data-testid="search-bar-form" action="" className="search-bar">

        <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
          <input
            name="text-input"
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            className="addMovie-item"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
          <input
            name="checkbox-input"
            data-testid="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            className="addMovie-item"
          />
        </label>

        <label data-testid="select-input-label" htmlFor="select-input">
            Filtrar por gênero
          <select
            name="select-input"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            className="addMovie-item"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>

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
