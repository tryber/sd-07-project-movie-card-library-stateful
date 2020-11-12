// implement SearchBar component here
import React, { Component } from 'react';
import Proptypes from 'prop-types';

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
        <h1>SearchBar</h1>
        <form data-testid="search-bar-form">
          <fieldset>
            <label data-testid="text-input-label">
              Inclui o texto:
              <input
                name="searchText"
                data-testid="text-input"
                value={searchText}
                onChange={onSearchTextChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                name="bookmarkedOnly"
                data-testid="checkbox-input"
                type="checkbox"
                checked={bookmarkedOnly}
                onChange={onBookmarkedChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label data-testid="select-input-label">
              Filtrar por gênero
              <select
                name="selectedGenre"
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
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
