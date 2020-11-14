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

        <label data-testid="select-input-label" htmlFor="option-gender">
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
            name="selectedGenre"
            data-key="genre"
          >
         Filtrar por gênero
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
