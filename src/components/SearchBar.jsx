// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
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
              name="searchText"
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="bookmarkedOnly"
              onChange={this.props.onBookmarkedChange}
              data-testid="checkbox-input"
            />
            Mostrar Somente Favoritos
          </label>
          <br />
          <label data-testid="select-input-label">
            Filtrar por gênero:
            <select onChange={this.props.onSelectedGenreChange} data-testid="select-input">
              <option name="todos" value="" data-testid="select-option">
                Todos
              </option>
              <option name="action" value="action" data-testid="select-option">
                Ação
              </option>
              <option name="comedy" value="comedy" data-testid="select-option">
                Comédia
              </option>
              <option name="thriller" value="thriller" data-testid="select-option">
                Suspense
              </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
