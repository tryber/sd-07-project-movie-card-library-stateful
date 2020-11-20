// implement SearchBar component here
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
      <div className="search-bar">
        <form action="" data-testid="search-bar-form">
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              name="searchText"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

          <label htmlFor="favoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="bookmarkedOnly"
              data-testid="checkbox-input"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>

          <label htmlFor="genero" data-testid="select-input-label">
            Filtrar por gênero

            <select
              name="selectedGenre"
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >

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
          </label>

        </form>
      </div>
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
