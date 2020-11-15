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
                data-testid="select-input"
                id="genre-select"
                name="genre-select"
                value={this.props.selectedGenre}
                onChange={this.props.onSelectedGenreChange}
              >
                <option value="" data-testid="select-option" >Todos</option>
                <option value="action" data-testid="select-option">Ação</option>
                <option value="comedy" data-testid="select-option">Comédia</option>
                <option value="thriller" data-testid="select-option">Suspense</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: true,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};
