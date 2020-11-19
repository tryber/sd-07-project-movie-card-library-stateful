import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div className="myForm">
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="search">
            Inclui o texto <br />
            <input
              type="text"
              name="search"
              data-testid="text-input"
              onChange={onSearchTextChange}
              value={searchText}
            />
          </label>
          <br />
          <label data-testid="checkbox-input-label" htmlFor="checkBox">
            Mostrar somente favoritos <br />
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              name="checkBox"
            />
          </label>
          <br />
          <label data-testid="select-input-label" htmlFor="movieGenre">
              Filtrar por gênero <br />
            <select
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
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
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.bool.isRequired,
  onSelectedGenreChange: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.bool.isRequired,
};

export default SearchBar;
