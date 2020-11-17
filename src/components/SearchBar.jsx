import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      searchText,
      bookmarkedOnly,
      selectedGenre,
      } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search">
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

        <label data-testid="checkbox-input-label" htmlFor="check">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          id="check" data-testid="checkbox-input"
        />
        </label>

        <label data-testid="select-input-label" htmlFor="selectedGenre">
        Filtrar por gênero
          <select
            id="selectedGenre"
            data-testid="select-input"
            type="text"
            name="selectedGenre"
            value={selectedGenre}
            selectedgenre={selectedGenre}
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
      </form>);
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
