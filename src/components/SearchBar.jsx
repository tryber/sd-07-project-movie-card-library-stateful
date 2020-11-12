import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">

        <fieldset>
          <label
            htmlFor="text" data-testid="text-input-label"
          >Inclui o texto:</label>
          <input
            type="text"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="checkbox" data-testid="checkbox-input-label"
          >Mostrar somente favoritos</label>
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="select" data-testid="select-input-label"
          >Filtrar por gênero</label>
          <select
            type="select"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </fieldset>

      </form>
    );
  }
}

// https://medium.com/@henrique.weiand/react-defaultprops-proptypes-plano-de-aula-vi-2ac0f990cdd9
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
