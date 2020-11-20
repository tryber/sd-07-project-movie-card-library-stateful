// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto:</label>
          <div>
            <input 
              type="text"
              name="searchText"
              id="searchText"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </div>
          <div>
            <input 
              type="checkbox"
              name="bookmarkedOnly"
              id="bookmarkedOnly"
              data-testid="checkbox-input"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
            <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          </div>
          <div>
            <label htmlFor="selectedGenre" data-testid="select-input-label">Filtrar por gênero</label>
            <select
              name="selectedGenre"
              id="selectedGenre"
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </div>
        </div>
      </form>
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
