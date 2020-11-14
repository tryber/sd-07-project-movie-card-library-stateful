import React from 'react';

class SearchBar extends React.Component {
  render() {

    return (
      <form action="">
        <label htmlFor="" data-testid="text-input-label">
          Inclui o texto: <input type="text" data-testid="text-input"></input>
        </label>
        <br/>
        <label htmlFor="" data-testid="checkbox-input-label">
          Mostrar somente favoritos{" "}
          <input type="checkbox" data-testid="checkbox-input"></input>
        </label>
        <br/>
        <label htmlFor="" data-testid="select-input-label">
          Filtrar por gênero:
          <select style={{marginLeft: 10}} name="" id="" data-testid="select-input">
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;