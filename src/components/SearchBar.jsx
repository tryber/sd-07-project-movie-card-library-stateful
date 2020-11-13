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
    console.log(event);
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
        <label htmlFor="gender">Filtrar por gênero</label>
        <select id="gender" type="text">
          <option value="todos">Todos</option>
          <option value="acao">Ação</option>
          <option value="comedia">Comédia</option>
          <option value="suspense">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
