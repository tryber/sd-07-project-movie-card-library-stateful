import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="" data-testid="text-input-label">
          Inclui o texto:{" "}
          <input
            type="text"
            name="searchText"
            onChange={this.props.searchText}
            data-testid="text-input"
          ></input>
        </label>
        <br />
        <label htmlFor="" data-testid="checkbox-input-label">
          Mostrar somente favoritos{" "}
          <input
            type="checkbox"
            name="bookmarkedOnly"
            onChange={this.props.bookmarkedOnly}
            data-testid="checkbox-input"
          ></input>
        </label>
        <br />
        <label htmlFor="" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            style={{ marginLeft: 10 }}
            name="selectedGenre"
            onChange={this.props.selectedGenre}
            id=""
            data-testid="select-input"
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
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
  selectedGenre: PropTypes.func.isRequired,
};

export default SearchBar;