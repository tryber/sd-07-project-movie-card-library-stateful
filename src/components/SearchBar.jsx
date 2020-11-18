// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

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
      <form
        action=""
        data-testid="search-bar-form"
      >
        <label htmlFor="search-text" data-testid="text-input-label">Inclui o texto:</label>
        <input
          type="text"
          name="search-text"
          id="search-text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />

        <label
          htmlFor="bookmarked-only"
          data-testid="checkbox-input-label"
        >Mostrar somente favoritos
        <input 
          type="checkbox"
          name="bookmarked-only"
          id="bookmarked-only"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
        </label>

        <label htmlFor="selected-genre" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          name="selected-genre"
          id="selected-genre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;