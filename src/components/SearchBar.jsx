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
            <label htmlFor="includes-text">Inclui o Texto:</label>
            <input type="text" id="includes-text" />
          </div>
          <div>
            <input type="checkbox" name="show-favorites" />
            <label htmlFor="show-favorites">Mostrar somente favoritos</label>
          </div>
          <div>
            <label htmlFor="filter-by-genre">
              Filtrar por gênero:
              <select name="favorite-genre">
                <option value="all">Todos</option>
                <option value="action">Ação</option>
                <option value="fantasy">Fantasia</option>
                <option value="comedy">Comédia</option>
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
