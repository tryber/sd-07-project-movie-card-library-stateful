// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" onSubmit={this.handleSubmit}>
          <div>
            <label data-testid="text-input-label" htmlFor="searchtext">
              Inclui o texto:
              <input
                id="searchtext"
                type="text"
                data-testid="text-input"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onSearchTextChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="checkbox-input-label" htmlFor="searchcheckbox">
              Mostrar somente favoritos
              <input
                id="searchcheckbox"
                type="checkbox"
                data-testid="checkbox-input"
                name="bookmarkedOnly"
                checked={bookmarkedOnly}
                onChange={onBookmarkedChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="select-input-label" htmlFor="searchselected">
              Filtrar por gênero
              <select
                id="searchselected"
                data-testid="select-input"
                name="selectedGenre"
                value={selectedGenre}
                onChange={onSelectedGenreChange}
              >
                <option data-testid="select-option" value="">
                  Todos
                </option>
                <option data-testid="select-option" value="action">
                  Ação
                </option>
                <option data-testid="select-option" value="comedy">
                  Comédia
                </option>
                <option data-testid="select-option" value="thriller">
                  Suspense
                </option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};
