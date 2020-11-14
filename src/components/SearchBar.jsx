import React from 'react';
import Proptypes from 'prop-types';

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

        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            className="inputs" type="text" value={searchText}
            onChange={onSearchTextChange} id="text-input" data-testid="text-input"
          />
        </label>

        <br />

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            style={{ marginLeft: 10 }} type="checkbox" checked={bookmarkedOnly}
            onChange={onBookmarkedChange} id="checkbox-input" data-testid="checkbox-input"
          />
        </label>

        <br />

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            id="select-input" className="inputs" data-testid="select-input"
            value={selectedGenre} onChange={onSelectedGenreChange}
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
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
