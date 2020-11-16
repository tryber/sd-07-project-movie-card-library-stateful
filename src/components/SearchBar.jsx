// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="container-bar" data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={this.props.searchText}
            onChange={this.onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <div className="comp-serch">
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              id="checked"
              checked={this.props.bookmarkedOnly}
              onChange={this.props.onBookmarkedChange}
            />
          </label>
        </div>
        <div>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select value={this.props.selectedGenre} data-testid="select-input">
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
        </div>
      </form>
    );
  }
}

export default SearchBar;
