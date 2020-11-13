// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input-label">
            Inclui o texto:
            <input
              type="text"
              value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
              data-testid="text-input"
              name="searchText"
            />
          </label>
          <br />
          <label data-testid="checkbox-input-label" htmlFor="checkbox-input-label">
            <input
              type="checkbox"
              name="bookmarkedOnly"
              onChange={this.props.onBookmarkedChange}
              data-testid="checkbox-input"
            />
            Mostrar Somente Favoritos
          </label>
          <br />
          <label data-testid="select-input-label" htmlFor="select-input-label">
            Filtrar por gênero:
            <select onChange={this.props.onSelectedGenreChange} data-testid="select-input">
              <option name="todos" value="" data-testid="select-option">
                Todos
              </option>
              <option name="action" value="action" data-testid="select-option">
                Ação
              </option>
              <option name="comedy" value="comedy" data-testid="select-option">
                Comédia
              </option>
              <option name="thriller" value="thriller" data-testid="select-option">
                Suspense
              </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
