import React from 'react';

class SearchBar extends React.Component {
  render() {
    const p = this.props;
    const st = p.sea;
    const stc = p.onT;
    const k = p.b;
    const c = p.onk;
    const sg = p.sel;
    const sgc = p.onG;
    return (<form actdata-testid="search-bar-form">
      <label htmlFor="b" data-testid="text-input-label">Inclui o texto:</label>
      <input type="text" data-testid="text-input" id="b" value={st} onChange={stc} />
      <label htmlFor="f" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
      <input type="checkbox" data-testid="checkbox-input" checked={k} onChange={c} id="f" />
      <label htmlFor="s" data-testid="select-input-label">Filtrar por gênero</label>
      <select data-testid="select-input" id="s" value={sg} onChange={sgc}>
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </form>
    );
  }
}

export default SearchBar;
