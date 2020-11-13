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
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">Inclui o texto:
          <input
            name="search"
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
          name="checkbox"
        />
        <label
          htmlFor="checkbox"
          data-testid="checkbox-input-label"
        >Mostrar somente favoritos
        </label>

        <label htmlFor="select" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          name="select"
          data-testid="select-input"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </form>
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
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

export default SearchBar;
