import React from 'react';

class SearchBar extends React.Component {
  render() {
    const p = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="b" data-testid="text-input-label">Inclui o texto:</label>
          <input
            type="text"
            data-testid="text-input"
            id="b"
            value={p.searchText}
            onChange={p.onSearchTextChange}
          />
        </div>
        <div>
          <label htmlFor="f" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={p.bookmarkedOnly}
            onChange={p.onBookmarkedChange}
            id="f"
          />
        </div>
        <div>
          <label htmlFor="s" data-testid="select-input-label">Filtrar por gênero</label>
          <select
            data-testid="select-input"
            id="s"
            value={p.selectedGenre}
            onChange={p.onSelectedGenreChange}
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
