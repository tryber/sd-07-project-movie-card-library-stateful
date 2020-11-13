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
        <label htmlFor="textInclude" data-testid="text-input-label">Inclui o texto:</label>
        <input
          data-testid="text-input"
          type="text"
          id="textInclude"
          value={searchText}
          name="searchText"
          onChange={onSearchTextChange}
        />

        <label
          htmlFor="tookmarkedOnly"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
        </label>
        <input
          data-testid="checkbox-input"
          type="checkbox"
          id="tookmarkedOnly"
          name="tookmarkedOnly"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />

        <label htmlFor="selectedGenre" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          data-testid="select-input"
          id="selectedGenre"
          value={selectedGenre}
          name="selectedGenre"
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
  bookmarkedOnly: true,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};

export default SearchBar;
