// implement SearchBar component here

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // const chegada = this.props.bookmarkedOnly;
    // console.log(`Chegada da data no searchBar = ${chegada}`);
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="inputText" data-testid="text-input-label">Inclui o texto:</label>
        <input
          id="inputText"
          data-testid="text-input"
          type="text"
          placeholder="Search.."
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <br />
        <label htmlFor="inputCheckBox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        <input
          id="inputCheckBox"
          data-testid="checkbox-input"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        <br />
        <label htmlFor="inputSelect" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          id="inputSelect"
          data-testid="select-input"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">
            Todos
          </option>
          <option data-testid="select-option" value="action">
            Ação
          </option>
          <option data-testid="select-option" value="comedy">
            Comédia
          </option>
          <option data-testid="select-option" value="thriller">
            Suspense
          </option>
        </select>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
