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
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="for" data-testid="text-input-label">
        Inclui o texto:
          <input
            data-testid="text-input"
            id="for"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label >

        <label htmlFor="for" data-testid="checkbox-input-label">
        Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="for"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label data-testid="select-input-label" htmlFor="for">
          Filtrar por gênero
          <select value={selectedGenre} data-testid="select-input">
            <option data-testid="select-option" value="" id="for">Todos</option>
            <option data-testid="select-option" value="action" id="for">Ação</option>
            <option data-testid="select-option" value="comedy" id="for">Comédia</option>
            <option data-testid="select-option" value="thriller" id="for">Suspense</option>
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
}.isRequired;

export default SearchBar;
