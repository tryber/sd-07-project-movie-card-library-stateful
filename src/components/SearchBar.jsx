import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-text" data-testid="text-input-label">
            Inclui o texto:
              <input
                data-testid="text-input"
                value={this.props.searchText}
                onChange={this.props.onSearchTextChange}
              />
          </label>
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
