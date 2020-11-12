import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.targed.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }
  render() {
    return (
      <form data-testid="search-bar-form">

        <label data-testid="text-input-label" htmlFor="text-imput">
          Inclui o texto:
          <input
            type="text"
            value={this.state.searchText}
            onChange={this.onSearchTextChange}
            data-testid="text-input"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={this.state.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label >

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            value={this.state.selectedGenre}
            onChange={this.onSelectedGenreChange}
            data-testid="select-input"
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
