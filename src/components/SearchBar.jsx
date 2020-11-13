// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="search"
              type="text"
              value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
              data-testid="text-input"
            />
          </label>

          <label htmlFor="bookMarked" data-testid="checkbox-input-label">
              Mostrar somente favoritos
            <input
              id="bookMarked"
              type="checkbox"
              checked={this.props.bookmarkedOnly}
              onChange={this.props.onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="genre"
              value={this.props.selectedGenre}
              onChange={this.props.onSelectedGenreChange}
              data-testid="select-input"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
