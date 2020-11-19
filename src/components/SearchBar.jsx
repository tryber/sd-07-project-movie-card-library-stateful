// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="container-bar" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            type="text"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            data-testid="text-input"
            className="input-search"
            id="text-input"
            name="searchText"
          />
        </label>
        <div className="comp-serch">
          <label data-testid="checkbox-input-label" htmlFor="check-addMovie">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              id="check-addMovie"
              checked={this.props.bookmarkedOnly}
              onChange={this.props.onBookmarkedChange}
              className="input-bar-check "
              name="bookmarkedOnly"
            />
          </label>
        </div>
        <div>
          <label data-testid="select-input-label" htmlFor="select-addMovie">
            Filtrar por gênero
            <select
              value={this.props.selectedGenre}
              data-testid="select-input"
              id="select-addMovie"
              onChange={this.props.onSelectedGenreChange}
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
        </div>
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
