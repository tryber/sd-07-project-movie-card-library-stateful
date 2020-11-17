import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.props.searchText}
          bookmarkedOnly={this.props.bookmarkedOnly}
          selectedGenre={this.props.selectedGenre}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieLibrary;
