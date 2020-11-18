// editar
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const p = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          id="text"
          type="text"
          data-testid="text-input"
          value={p.searchText}
          onChange={p.onSearchTextChange}
        />
        <input
          type="checkbox"
          data-testid="checkbox-input"
          defaultChecked={p.bookmarkedOnly}
          onChange={p.onBookmarkedChange}
        />
        <label htmlFor="favorite" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        <label htmlFor="genre" data-testid="select-input-label">
          Filtrar por gênero
        </label>
        <select
          id="genre"
          data-testid="select-input"
          value={p.selectedGenre}
          onChange={p.onSelectedGenreChange}
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
