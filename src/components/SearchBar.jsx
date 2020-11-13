import React from 'react';

class SearchBar extends React.Component {
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
      <form data-testid="search-bar-form">

        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            className="inputs" type="text" value={searchText}
            onChange={onSearchTextChange} id="text-input" data-testid="text-input"
          />
        </label>

        <div />

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            style={{ marginLeft: 10 }} type="checkbox" checked={bookmarkedOnly}
            onChange={onBookmarkedChange} id="checkbox-input" data-testid="checkbox-input"
          />
        </label>

        <div />

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            id="select-input" className="inputs"
            value={selectedGenre} onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>

      </form>
    );
  }
}

export default SearchBar;
