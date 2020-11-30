import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieList from './MovieList';
import movies from '../data';

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
          <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto:</label>
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            name="searchText"
          />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            name="checkbox-input"
          />
          <label htmlFor="select-input" data-testid="select-input-label">Filtrar por gênero</label>
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
  };
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}
