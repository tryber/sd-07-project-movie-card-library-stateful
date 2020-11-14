import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }
  render() {
    const {
    searchText, onSearchTextChange, bookmarkedOnly,
    onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (<form data-testid="search-bar-form">
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto:</label>
        <input
          type="text" id="searchText" name="searchText"
          value={searchText} onChange={onSearchTextChange} data-testid="text-input"
        />
      </div>
      <div>
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
        </label>
        <input
          htmlFor="bookmarkedOnly" name="bookmarkedOnly" type="checkbox" id="bookmarkedOnly"
          checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input"
        />
      </div>
      <div>
        <label htmlFor="selectedGenre" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          htmlFor="selectedGenre" name="selectedGenre" data-testid="select-input"
          onChange={onSelectedGenreChange} value={selectedGenre}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </div>
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
