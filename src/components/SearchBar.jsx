import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {  
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input type="text" data-testid="text-input"
              value={searchText} onChange={onSearchTextChange}/>
          </label>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input data-testid="checkbox-input" type="checkbox"
              checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
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
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar

