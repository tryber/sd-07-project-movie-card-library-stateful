import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={this.props.searchText}
        />
      </div>
    );
  }
}

export default MovieLibrary;
