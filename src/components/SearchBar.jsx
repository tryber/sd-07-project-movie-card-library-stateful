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
      <form data-testid="search-bar-form">
        <input data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
        <label data-testid="text-input-label">Inclui o texto</label>
        <div>
          <input type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <div>
            <label data-testid="select-input-label">Filtrar por gênero</label>
            <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </div>
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
