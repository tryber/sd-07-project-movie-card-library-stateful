import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
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
      <div className="search-bar-form">
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto
            <input
              id="text-input"
              type="text"
              name="search"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="checkbox-input"
              type="checkbox"
              name="checkbox-input"
              data-testid="checkbox-input"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={selectedGenre}
              name="select-input"
              onChange={onSelectedGenreChange}
              data-testid="select-input"
            >
              <option
                data-testid="select-option"
                value=""
              >Todos</option>
              <option
                data-testid="select-option"
                value="action"
              >Ação</option>
              <option
                data-testid="select-option"
                value="comedy"
              >Comédia</option>
              <option
                data-testid="select-option"
                value="thriller"
              >Suspense</option>
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
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
