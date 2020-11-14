import React, { Component } from 'react';
import PropTypes from 'prop-types';
class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor={"text-input"} data-testid="text-input-label">
          Inclui o texto:
          <input
            name='searchText'
            type="text"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <label htmlFor={"checkbox-input"} data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            name='bookmarkedOnly'
            type="checkbox"
            checked={this.props.bookmarkedOnly}
            data-testid="checkbox-input"
            onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label htmlFor={"select-option"} data-testid="select-input-label">
          Filtrar por gênero
          <select
            name='selectedGenre'
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
            data-testid="select-input"
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
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,  
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func  
}
export default SearchBar;
