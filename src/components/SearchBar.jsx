// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
        <form id="form" action="" method="GET" data-testid="search-bar-form">
            <fieldset>
                <div>
                    <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto</label>
                    <input name="searchText"
                    data-testid="text-input"
                    type="text"
                    value={searchText}
                    onChange={onSearchTextChange}
                    pattern="[A-zÀ-ÿ ]{1,}">
                    </input>
                </div>
                <div>
                    <label htmlFor="checkbox" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
                    <input name="bookmarkedOnly"
                    data-testid="checkbox-input"
                    type="checkbox"
                    checked={bookmarkedOnly}
                    onChange={onBookmarkedChange}>
                    </input>
                </div>
                <div>
                    <label htmlFor="selectedGenre" data-testid="select-input-label">Filtrar por gênero</label>
                    <select name="selectedGenre"
                    data-testid="select-input"
                    value={selectedGenre}
                    onChange={onSelectedGenreChange}>
                        <option data-testid="select-option" value="">Todos</option>
                        <option data-testid="select-option" value="action">Ação</option>
                        <option data-testid="select-option" value="comedy">Comédia</option>
                        <option data-testid="select-option" value="thriller">Suspense</option>
                    </select>
                </div>
            </fieldset>
        </form>
      );
  };
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};  

export default SearchBar;
