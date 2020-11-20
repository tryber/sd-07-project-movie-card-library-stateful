import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    /*
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props; */

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="incluiTexto" data-testid="text-input-label">Inclui o texto</label>
        <input
          type="text"
          value={this.searchText}
          onChange={this.onSearchTextChange}
          data-testid="text-input"
        />

        <label htmlFor="fav" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input
          type="checkbox"
          checked={this.bookmarkedOnly}
          onChange={this.onBookmarkedChange}
          data-testid="checkbox-input"
        />

        <label htmlFor="filtrar" data-testid="select-input-label">Filtrar por gênero</label>
        <select value={this.selectedGenre} onChange={this.onSearchTextChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

      </form>
    );
  }
}

export default SearchBar;
