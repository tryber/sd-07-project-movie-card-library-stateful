import React, { Component } from 'react';
import MovieList from './MovieList';
import movies from '../data';
import App from './SearchBar';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.props;

    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label" />
            Inclui o texto:
            <input
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
              name="searchText"
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
          <label htmlFor="select-input" data-testid="select-input-label" />
            Filtrar por gênero
            <select name="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
        </form>
        <div>
          <MovieList movies={movies} />
        </div>
      </div>
    );
  }
}
