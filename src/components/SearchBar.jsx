import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,onSelectedGenreChange
    } = this.props;
    return (
      <div>
        <form data-testid="text-input-label">
          <label htmlFor="text-input-label" data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              id="text-input-label"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                id="checkbox-input"
                type="checkbox"
                data-testid="checkbox-input"
                checked={bookmarkedOnly}
                onChange={onBookmarkedChange}
              />
            </label>
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={selectedGenre}
              onChange={onSelectedGenreChange}
              data-testid="select-input">
              <option
                data-testid="select-option"
                value="">
                Todos</option>
              <option
                data-testid="select-option"
                value="action">Ação</option>
              <option
                data-testid="select-option"
                value="comedy">Comédia</option>
              <option
                data-testid="select-option"
                value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}