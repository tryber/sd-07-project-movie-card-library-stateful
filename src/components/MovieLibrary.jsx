import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  //   this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
  //   this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //   }
  // }

  // onSearchTextChange() {

  // }

  // onBookmarkedChange() {

  // }

  // onSelectedGenreChange() {
  // }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
