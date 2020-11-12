import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto</label>
        <input
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
          data-testid="text-input"
        />

        <label
          htmlFor="checkbox-input"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
        </label>
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />

        <label
          htmlFor="select-input"
          data-testid="select-input-label"
        >
          Filtrar por gênero
        </label>
        <select
          onChange={this.props.onSelectedGenreChange}
          value={this.props.selectedGenre}
          data-testid="select-input"
        >
          <option data-testid="select-option" value="" >Todos</option>
          <option data-testid="select-option" value="action" >Ação</option>
          <option data-testid="select-option" value="comedy" >Comédia</option>
          <option data-testid="select-option" value="thriller" >Suspense</option>
        </select>
      </form>
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
