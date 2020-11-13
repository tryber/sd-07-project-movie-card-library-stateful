import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({ bookmarkedOnly: value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          id="text"
          data-testid="text-input"
          value={this.searchText}
          type="text"
          onChange={this.onSearchTextChange}
        />
        <label data-testid="checkbox-input-label" htmlFor="filter">
          <input
            id="filter"
            type="checkbox"
            data-testid="checkbox-input"
            checked={this.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
          />
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" htmlFor="gender">
          Filtrar por gênero
        </label>
        <select
          value={this.selectedGenre}
          data-testid="select-input"
          id="gender"
          type="text"
          onChange={this.onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
