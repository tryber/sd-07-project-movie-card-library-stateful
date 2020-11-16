// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
      </div>

    );
  }
}
MovieLibrary.defaultProps = {
  SearchText: '', 
  bookmarkedOnly: false,
  selectedGenre: '' 
}

MovieLibrary.PropTypes = { searchText: PropTypes.string.isRequired, 
                           bookmarkedOnly: PropTypes.bool.isRequired,
                           selectedGenre: PropTypes.string.isRequired 
                          };

export default MovieLibrary;
