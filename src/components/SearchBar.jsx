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
    // é como se fosse this.props.searchText
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="search">
            Inclui o texto:W
          </label>
          <input
            name="search"
            type="text"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />

          <label data-testid="checkbox-input-label" htmlFor="chekSearch">
            Mostrar somente favoritos
          </label>
          <input
            name="chekSearch"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />

          <label data-testid="select-input-label" htmlFor="labelSelect">
            Filtrar por gênero
          </label>
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            name="labelSelect"
            data-testid="select-input"
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
