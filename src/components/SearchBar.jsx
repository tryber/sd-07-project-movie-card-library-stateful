import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  searchText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="searchText">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          name="searchtext"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  bookmarkedOnly() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor=" bookmarkedOnly">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          name="bookmarkedOnly"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  selectedGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor=" selectedGenre">
        Filtrar por gênero
        <select
          data-testid="select-input"
          type="checkbox"
          name="selectedGenre"
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
            Suspense
          </option>

        </select>


      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form" htmlFor=" form">
          {this.searchText()}
          {this.bookmarkedOnly()}
          {this.selectedGenre()}
        </form>
      </div>
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
