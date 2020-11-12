import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre,
      searchText,
      bookmarkedOnly,
    } = this.props;

    return (
      
      <form data-testid="search-bar-form">
        <fieldset>
          <label data-testid="text-input-label">Inclui o texto:</label>
          <input
            type="text"
            onChange={onSearchTextChange}
            value={searchText}
            data-testid="text-input"
          />
        </fieldset>
        <fieldset>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            data-testid="checkbox-input"
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
            type="checkbox"
          />
        </fieldset>
        <fieldset>
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select
            name='selectedGenre'
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            type="select"
            
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
