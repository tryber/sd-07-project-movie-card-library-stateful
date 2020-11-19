import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
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
          <div>
            <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto
              <input
                id="text-input"
                data-testid="text-input"
                type="text"
                name="searchText"
                value={searchText}
                onChange={onSearchTextChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="check-input" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                id="check-input"
                data-testid="checkbox-input"
                type="checkbox"
                name="bookmarkedOnly"
                checked={bookmarkedOnly}
                onChange={onBookmarkedChange}
              />
            </label>
          </div>

          <div>
            {/* Cada option deve apresentar o atributo data-testid="select-option" */}
            <label htmlFor="select-input" data-testid="select-input-label">
              Filtrar por gênero
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
            </label>
          </div>
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
