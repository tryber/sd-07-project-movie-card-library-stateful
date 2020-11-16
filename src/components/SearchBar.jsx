import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label"> Inclui o texto
          <input value={this.props.searchText} onChange={this.props.onSearchTextChange} data-testid="text-input"/>
          </label>

          <label data-testid="checkbox-input-label"> Mostrar somente favoritos
          <input type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} data-testid="checkbox-input"/>
          </label>
        </form>
      </div>
    );
  }
} 

/* SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.function.isRequired,
  bookmarkedOnly: PropTypes.boolean.isRequired,
  onBookmarkedChange: PropTypes.function.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.function.isRequired,
}; */

export default SearchBar;
