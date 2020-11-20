import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    console.log('clicou!');
  }
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
        <h1 className="search">Searching</h1>
        <button onClick={this.handleClick}>Meu Botao</button>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="includes-text" data-testid="text-input-label">
              Inclui o texto:
            </label>
            <input
              type="text"
              id="includes-text"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              name="show-favorites"
              data-testid="checkbox-input"
            />
            <label htmlFor="show-favorites" data-testid="checkbox-input-label">
              Mostrar somente favoritos
            </label>
          </div>
          <div>
            <label htmlFor="filter-by-genre" data-testid="select-input-label">
              Filtrar por gênero
              <select
                name="favorite-genre"
                data-testid="select-input"
                value={selectedGenre}
                onChange={onSelectedGenreChange}
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
                  Fantasia
                </option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
