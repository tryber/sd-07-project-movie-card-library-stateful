import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const prop = this.props;
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = prop;
    return (
      <form data-testid="search-bar-form">

        <label data-testid="text-input-label" htmlFor="text-imput">
          Inclui o texto:
          <input
            name="text-imput"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            name="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label >

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            name="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>

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
}.isRequired;

export default SearchBar;
