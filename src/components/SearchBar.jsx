import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          <span>Inclui o texto: </span>
          <input
            type="text"
            name="searchText"
            id="text-input"
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="bookmaerdOnly"
            id="checkbox-input"
            data-testid="checkbox-input"
          />
          <span>Mostrar somente favoritos</span>
        </label>
        <br />
        <label htmlFor="select-input" data-testid="select-input-label">
          <span>Filtrar por gênero</span>
          <select
            name="selectedGenre"
            id="select-input"
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
