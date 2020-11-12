import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">

        <fieldset>
          <label
            htmlFor="text" data-testid="text-input-label"
          >Inclui o texto:</label>
          <input
            type="text"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="checkbox" data-testid="checkbox-input-label"
          >Mostrar somente favoritos</label>
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="select" data-testid="select-input-label"
          >Filtrar por gênero</label>
          <select
            type="select"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </fieldset>

      </form>
    );
  }
}

export default SearchBar;
