import React from 'react';

class SearchBarSelect extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="select-input" data-testid="select-input-label">Filtrar por gênero</label>
        <select 
          name="select-input" 
          value={this.selectedGenre}
          onChange={this.onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </fieldset>
    );
  }
}

export default SearchBarSelect;