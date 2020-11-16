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
      <form data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto</label>
          <input
            id="text-input"
            data-testid="text-input"
            type="text"
            name="searchText"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </div>
        <div>
          <label
            data-testid="checkbox-input-label"
            htmlFor="checkbox-input"
          >
                Mostrar somente favoritos
          </label>
          <input
            id="checkbox-input"
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </div>
        <div>
          <label
            data-testid="select-input-label"
            htmlFor="select-input"
          >
            Filtrar por gênero
          </label>
          <select
            id="select-input"
            data-testid="select-input"
            name="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
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

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
