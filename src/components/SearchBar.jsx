import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    // } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label" />
          Inclui o texto:
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            name="text-input"
          />
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label" />
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            name="checkbox-input"
          />
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
