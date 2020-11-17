// implement SearchBar component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
      <form className="form-search" data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            name="searchText"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>

        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            type="select"
            name="selectedGenre"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option
              data-testid="select-option"
              value=""
            >Todos</option>
            <option
              data-testid="select-option"
              value="action"
            >Ação</option>
            <option
              data-testid="select-option"
              value="comedy"
            >Comédia</option>
            <option
              data-testid="select-option"
              value="thriller"
            >Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  onSearchTextChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  searchText: PropTypes.string,
  selectedGenre: PropTypes.string,
}).isRequired;

export default SearchBar;
