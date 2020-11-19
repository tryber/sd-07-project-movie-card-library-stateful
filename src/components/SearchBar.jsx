import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-bar" data-testid="text-input-label">Inclui o texto:</label>
          <input
            id="search-bar"
            type="text"
            data-testid="text-input"
            onChange={this.props.onSearchTextChange}
            value={this.props.searchText}
          />

          <label htmlFor="check" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            id="check"
            type="checkbox"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
            data-testid="checkbox-input"
          />

          <label htmlFor="sele" data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <select
            id="sele"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
