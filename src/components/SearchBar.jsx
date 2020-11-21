// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form" className="form">
        <div className="field">
          <div className="control">
            <label
              className="label"
              htmlFor="text-input"
              data-testid="text-input-label"
            >
              Inclui o texto:
            </label>
            <input
              id="text-input"
              className="input is-primary"
              data-testid="text-input"
              name="searchText"
              value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label
              className="checkbox"
              htmlFor="favorites-checkbox"
              data-testid="checkbox-input-label"
            >
              <input
                type="checkbox"
                className="checkbox"
                data-testid="checkbox-input"
                id="favorites-checkbox"
                name="favorites-checkbox"
                checked={this.props.bookmarkedOnly}
                onChange={this.props.onBookmarkedChange}
              />
              Mostrar somente favoritos
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label
            className="label"
            htmlFor="genre-select"
            data-testid="select-input-label"
            >
              Filtrar por gênero:
            </label>
            <div className="select is-primary">
              <select
                onChange={this.props.onSelectedGenreChange}
                data-testid="select-input"
                id="genre" name="selectedGenre" value={this.props.selectedGenre}
              >
                <option data-testid="select-option" value="">Todos</option>
                <option data-testid="select-option" value="action">Ação</option>
                <option data-testid="select-option" value="comedy">Comédia</option>
                <option data-testid="select-option" value="thriller">Suspense</option>
              </select>
            </div>
          </div>
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
