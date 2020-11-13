// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render () {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              value={this.props.searchText} 
              onChange={this.props.onSearchTextChange}
              data-testid="text-input"
            />
          </label>

          <label data-testid="checkbox-input-label">
              Mostrar somente favoritos
            <input 
              type="checkbox"
              checked={this.props.bookmarkedOnly} 
              onChange={this.props.onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange} data-testid="select-input">
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>

          </label>
          
        </form>
      </div>

    )
  }
}

export default SearchBar;