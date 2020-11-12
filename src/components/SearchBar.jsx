import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
/*  constructor(props) {
    super(props);
    this.teste = this.teste.bind(this);
    
    this.state = {
      searchText: '',
      onSearchTextChange: '',
      bookmarkedOnly: false,
      onBookmarkedChange: '',
      selectedGenre: '',
      onSelectedGenreChange: '',
    };
  } */

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return(
        <form data-testid="search-bar-form">
            <label htmlFor="searchText" data-testid="text-input-label">
              <input 
                type="text"
                value={searchText}
                onChange={onSearchTextChange}
                data-testid="text-input"
              />
            </label>
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