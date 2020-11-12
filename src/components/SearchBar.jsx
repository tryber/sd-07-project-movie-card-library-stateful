import React from 'react';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-include" data-testid="text-input-label">
            Inclui o texto:
          </label>
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
          <br />

          <label htmlFor="favorite" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
          <br />

          <label htmlFor="genre" data-testid="select-input-label">Filtrar por gênero</label>
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
