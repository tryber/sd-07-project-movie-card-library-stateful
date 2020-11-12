import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {

    const { 
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

          <label data-testid="checkbox-input-label">
            Mostrar somente favirotos
            <input
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>

          <label data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-test-id="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option
                value=""
                data-testid="select-option"
              >Todos</option>

              <option
                value="action"
                data-testid="select-option"
              >Ação</option>

              <option
                value="comedy"
                data-testid="select-option"
              >Comédia</option>

              <option
                value="thriller"
                data-testid="select-option"
              >Suspense</option>
            </select>
          </label>
        </form>
      </div>
    ) 
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}