import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const p = this.props;
    const st = p.searchText;
    const stc = p.onSearchTextChange;
    const bk = p.bookmarkedOnly;
    const bkc = p.onBookmarkedChange;
    const sg = p.selectedGenre;
    const sgc = p.onSelectedGenreChange;
    return (<form actdata-testid="search-bar-form">
      <label data-testid="text-input-label">Inclui o texto:</label>
      <input type="text" data-testid="text-input" name="barra" value={st} onChange={stc} />
      <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
      <input type="checkbox" data-testid="checkbox-input" name="fav" checked={bk} onChange={bkc} />
      <label data-testid="select-input-label">Filtrar por gênero</label>
      <select data-testid="select-input" name="genero" value={sg} onChange={sgc}>
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
