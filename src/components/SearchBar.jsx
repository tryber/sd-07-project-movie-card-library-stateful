import React, { Component } from 'react';

const genre = ['Todos', 'Ação', 'Comédia', 'Suspense']

class SearchBar extends Component {

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

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ bookmarkedOnly: value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto
              <input
                id="text-input"
                data-testid="text-input"
                type="text"
                name="text-input-label"
                value={this.state.searchText}
                onChange={this.onSearchTextChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="check-input" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                id="check-input"
                data-testid="checkbox-input"
                type="checkbox"
                name="checkbox-input-label"
                value={this.state.bookmarkedOnly}
                onChange={this.onBookmarkedChange}
              />
            </label>
          </div>

          <div>
            {/* Cada option deve apresentar o atributo data-testid="select-option" */}
            <label htmlFor="select-input" data-testid="select-input-label">
              Filtrar por gênero
              <select
                id="select-input"
                data-testid="select-input"
                name="select-input-label"
                value={this.state.selectedGenre}
                onChange={this.onSelectedGenreChange}
              >
                {genre.map((value, key) =>
                  <option key={key}>{value} </option>
                )
                }
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;