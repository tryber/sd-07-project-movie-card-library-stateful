import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
          <input
            id="text-input"
            type="text" value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </div>

        <div>
          <input
            id="checkbox-input"
            data-testid="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label
            htmlFor="checkbox-input"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
          </label>
        </div>

        <div>
          <label
            htmlFor="select-input"
            data-testid="select-input-label"
          >
            Filtrar por gênero
          </label>
          <select
            id="select-input"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thruller">Suspense</option>
          </select>
        </div>

      </form>
    );
  }
}

export default SearchBar;
