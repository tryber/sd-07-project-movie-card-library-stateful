// implement SearchBar component here

import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return(
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="search-input">Inclui o texto:</label>
          <input data-testid="text-input" onChange={onSearchTextChange} value={searchText}></input>

          <label data-testid="checkbox-input-label" htmlFor="favorits-input">Mostrar somente favoritos</label>
          <input data-testid="checkbox-input" onChange={ onBookmarkedChange } type="checkbox" checked={ bookmarkedOnly } />

          <label data-testid="select-input-label" htmlFor="select-gender" value={ selectedGenre }>Filtrar por gênero</label>
            <select data-testid="select-input" onChange={ onSelectedGenreChange } value={ selectedGenre }>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
        </form>
      </div>
    )
  }
}


export default SearchBar;
