import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly={false}
          onBookmarkedChange="function"
          selectedGenre=""
          onSelectedGenreChange="function"
        />
      </div>
    );
  }
}

export default MovieLibrary;
