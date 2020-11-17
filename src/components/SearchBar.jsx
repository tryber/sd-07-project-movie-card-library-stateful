import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="myForm">
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="search">
            Inclui o texto <br />
            <input
              type="text"
              name="search"
              data-testid="text-input"
              value={this.props.searchText} onChange={this.props.onSearchTextChange}
            />
          </label>
          <br />
          <label data-testid="checkbox-input-label" htmlFor="checkBox">
            Mostrar somente favoritos <br />
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={this.props.bookmarkedOnly}
              onChange={this.props.onBookmarkedChange}
              name="checkBox"
            />
          </label>
          <br />
          <label data-testid="select-input-label" htmlFor="movieGenre">
              Filtrar por gênero <br />
            <select
              data-testid="select-input"
              value={this.props.selectedGenre}
              onChange={this.props.onSelectedGenreChange}
              name="movieGenre"
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.bool.isRequired,
  onSelectedGenreChange: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.bool.isRequired,
};

export default SearchBar;
