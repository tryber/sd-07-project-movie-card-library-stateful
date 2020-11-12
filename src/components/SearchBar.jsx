// implement SearchBar component here
import React from 'react';
import MovieList from './MovieList';

class SearchBar extends React.Component {
  render() {

    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">

        <label data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
        </label>

        <div />

        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input" />
        </label>

        <div />
        
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option> 
            <option value="action" selected>Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>

      </form>
    );
  }
}

export default SearchBar;
