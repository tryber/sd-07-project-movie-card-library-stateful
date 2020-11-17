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
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchText"
            data-testid="text-input"
            type="text"
            name="searchText"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>

        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
        </label>
        <select
          data-testid="select-input"
          name="selectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action" >Ação</option>
          <option data-testid="select-option" value="comedy" >Comédia</option>
          <option data-testid="select-option" value="thriller" >Suspense</option>
        </select>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  OnSelectedGenreChange: PropTypes.func,
}.isRequired;

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

export default SearchBar;
