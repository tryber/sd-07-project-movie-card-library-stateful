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
      <div className="search-bar">
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <br />
            <input
              data-testid="text-input"
              className="inputs"
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <br />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            <input
              data-testid="checkbox-input"
              className="checkbox"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
            Mostrar somente favoritos
          </label>
          <br />
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <br />
            <select
              data-testid="select-input"
              className="inputs"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
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

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
