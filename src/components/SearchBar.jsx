// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

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
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
            <input 
              data-testid="text-input"
              id="text-input"
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

          <label data-testid="checkbox-input-label" htmlFor="ckeckbox-input">
            Mostrar somente favoritos
            <input 
              type="checkbox"
              data-testid="checkbox-input"
              id="ckeckbox-input"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>

          <label data-testid="select-input-label" htmlFor="select-input">
              Filtrar por gênero
            <select 
            data-testid="select-input"
            value={selectedGenre}
            id="select-input"
            onChange={onSelectedGenreChange} 
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
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
