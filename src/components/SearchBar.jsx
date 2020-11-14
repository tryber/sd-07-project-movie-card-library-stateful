import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="inputSearch" data-testid="text-input-label">
            Incluir o texto:
            <input
              type="text"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
              name="inputSearch"
            />
          </label>
          {/* <label htmlFor="checkboxSearch" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              data-testid="checkbox-input"
              checked="bookmarkedOnly"
              onChange="onBookmarkedChange"
            />
          </label>
          <label htmlFor="selectSearch" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="selectSearch"
              name="selectSearch"
              selectedGenre="selectedGenre"
              onChange="onSelectedGenreChange"
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
          </label> */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
