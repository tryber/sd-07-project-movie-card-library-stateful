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
        <form data-testid="search-bar-form" className="form">
          <div>
            <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto:
              <input
                type="text"
                name="text-input"
                value={searchText}
                data-testid="text-input"
                onChange={onSearchTextChange}
                id="search-bar-form"
              />
            </label>
          </div>
          <div>
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                type="checkbox"
                checked={bookmarkedOnly}
                data-testid="checkbox-input"
                onChange={onBookmarkedChange}
                id="checkbox-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="select-input" data-testid="select-input-label">
              Filtrar por gênero
              <select
                type="select"
                name="select-input"
                value={selectedGenre}
                data-testid="select-input"
                onChange={onSelectedGenreChange}
                id="select-input"
              >
                <option data-testid="select-option" value="">Todos</option>
                <option data-testid="select-option" value="action">Ação</option>
                <option data-testid="select-option" value="comedy">Comédia</option>
                <option data-testid="select-option" value="thriller">Suspense</option>
              </select>
            </label>
          </div>
        </form>
      </div>
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
