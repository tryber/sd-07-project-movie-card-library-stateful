// implement SearchBar component here
import React from "react";

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <div>
          <label htmlFor="text" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              name="searchText"
              id="text"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="favorite" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="bookmarkedOnly"
              id="favorite"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="filterGenre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name="selectedGenre"
              id="filterGenre"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
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
        </div>
      </form>
    );
  }
}

export default SearchBar;
