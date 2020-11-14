import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
            <input
              name="searchText"
              id="text-input"
              type="text" value={searchText}
              onChange={this.props.onSearchTextChange}
              data-testid="text-input"
            />
          </div>

          <div>
            <input
              name="bookmarkedOnly"
              id="checkbox-input"
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
            <label
              htmlFor="checkbox-input"
              data-testid="checkbox-input-label"
            >
              Mostrar somente favoritos
            </label>
          </div>

          <div>
            <label
              htmlFor="select-input"
              data-testid="select-input-label"
            >
              Filtrar por gênero
            </label>
            <select
              name="selectedGenre"
              id="select-input"
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </div>

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

export default SearchBar;
