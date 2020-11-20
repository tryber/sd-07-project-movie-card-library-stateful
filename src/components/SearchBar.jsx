// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label">Inclui o texto:</label>
          <div>
            <input type="text" name="searchText"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </div>
          <div>
            <input type="checkbox" name="bookmarkedOnly"
              data-testid="checkbox-input"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          </div>
          <div>
            <label data-testid="select-input-label">Filtrar por gênero</label>
            <select name="selectedGenre"
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </div>
        </div>
      </form>
    )
  }
}



export default SearchBar
