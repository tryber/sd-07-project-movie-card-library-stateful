import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label
            htmlFor="search-input"
            data-testid="text-input-label">Inclui o texto</label>
          <input
            data-testid="text-input"
            onChange={onSearchTextChange}
            value={searchText} id="search-input"
            type="text"/>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            data-testid="checkbox-input"
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
            type="checkbox"/>
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select
            data-testid="select-input"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
            checked={bookmarkedOnly}>
            <option
              data-testid="select-option"
              value="">Todos</option>
            <option
              data-testid="select-option"
              value="action">Ação</option>
            <option
              data-testid="select-option"
              value="comedy">Comédia</option>
            <option
              data-testid="select-option"
              value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
};

export default SearchBar;
