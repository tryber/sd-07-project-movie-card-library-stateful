// implement SearchBar component here
import PropTypes from 'prop-types';
import React from 'react';

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
      <form data-testid="search-bar-form" for="searchtextimput">
        <label data-testid="text-input-label">
          Inclui o texto
        </label>
        <input
          data-testid="text-input"
          type="text"
          name="searchText"
          id="searchtextimput"
          value={searchText}
          onChange={onSearchTextChange}
        />


        <label data-testid="checkbox-input-label" for="checkboxfaves">
          Mostrar somente favoritos
        </label>
        <input
          data-testid="checkbox-input"
          type="checkbox"
          name="bookmarkedOnly"
          id="checkboxfaves"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />


        <label data-testid="select-input-label" for="labelselect">
          Filtrar por gênero
        </label>
        <select
          id="labelselect"
          data-testid="select-input"
          name="selectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">
            Todos
            </option>
          <option data-testid="select-option" value="action">
            Ação
            </option>
          <option data-testid="select-option" value="comedy">
            Comédia
            </option>
          <option data-testid="select-option" value="thriller">
            Suspense
            </option>
        </select>

      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText = propTypes.string,
  onSearchTextChange = propTypes.func,
  bookmarkedOnly = propTypes.bool,
  onBookmarkedChange = propTypes.func,
  selectedGenre = propTypes.string,
  onSelectedGenreChange = propTypes.func,

}