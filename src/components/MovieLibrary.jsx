import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    };
  }

  onSearchTextChange = event => {
    //
  }

  onBookmarkedChange = event => {
    //
  }

  onSelectedGenreChange = event => {
    //
  }

  handleClick = event => {
    //
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange} />
        <MovieList movies={movies}/>
        <AddMovie handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default MovieLibrary;
