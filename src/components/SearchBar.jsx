import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  inputSearch() {
    const { searchText, onSearchChange } = this.props;
    return(
      <label htmlFor="search-text" data-testid="text-input-label">
        Inclui o texto
        <input 
          type="text"
          name="search-text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
          data-key="searchtext"
        />
      </label>
    );
  }

  bookmarked() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return(
      <label htmlFor="bookmarked-change" data-testid="checkbox-input-label">
        <input 
          type="checkbox"
          name="bookmarked-change"
          data-testid="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-key="bookmarkedOnly"
          />
          Mostrar somente favoritos
      </label>
    );
  }

  selectedGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return(
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por Gênero
        <select 
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="selected-input"
          name="selected-genre"
          data-key="selectedGenre"

        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comedia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
          </select>
      </label> 
    );
  }
  render() {
    return(
      <div>
        <form
          // prettier-ignore
          onSubmit={(event) => event.preventDefault()}
          data-testid="search-bar-form"
        >
          {this.inputSearch()}
          {this.bookmarked()}
          {this.selectedGenre()}
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  seachText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;