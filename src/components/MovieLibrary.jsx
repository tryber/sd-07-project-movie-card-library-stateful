import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import data from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
  }

  // onSearchTextChange() {

  // }

  // onBookmarkedChange() {

  // }

  // resetState = () => {
  //   this.initialState = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };

  //   this.setState(this.initialState);
  // }

  addMovieHandler(movieObject) {
    return movieObject;
  }

  // onSelectedGenreChange() {
  // }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={data} />
        <AddMovie onClick={this.addMovieHandler} />
      </div>
    );
  }
}

export default MovieLibrary;
