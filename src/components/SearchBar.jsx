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
          <label htmlFor="text-include" data-testid="text-input-label">
           Inclui o texto:
            <input
              type="text"
              id="text-include"
              placeholder="Pesquisar"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>

          <br />
          <label htmlFor="favorite" data-testid="checkbox-input-label">
            <input
              type="checkbox"
              id="favorite"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
            />
            Mostrar somente favoritos
          </label>

          <br />

          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="genre"
              value={selectedGenre}
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
