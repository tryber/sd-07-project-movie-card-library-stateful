// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="titleFind" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" name="titleFind" id="titleFind" data-testid="text-input" />
        </label><br />
        <label htmlFor="favorit" data-testid="checkbox-input-label">
          <input type="checkbox" name="favorit" id="favorit" data-testid="checkbox-input" />
          Mostrar somente favoritos
        </label><br />
        <label htmlFor="genere" data-testid="select-input-label">
        Filtrar por gênero<br />
          <select name="genere" id="genere" data-testid="select-input">
            <option name="genere" value="">Todos</option>
            <option name="genere" value="action">Ação</option>
            <option name="genere" value="comedy">Comédia</option>
            <option name="genere" value="thriller">Sispense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
