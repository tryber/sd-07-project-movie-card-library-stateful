import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    });
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    console.log(event);
  }

  onSelectedGenreChange(event) {
    console.log(event);
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">Inclui o texto:</label>
        <input
          id="text"
          data-testid="text-input"
          value={this.searchText}
          type="text"
          onChange={this.onSearchTextChange}
        />
        <input id="filter" type="checkbox" />
        <label htmlFor="filter">Mostrar somente favoritos</label>
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
