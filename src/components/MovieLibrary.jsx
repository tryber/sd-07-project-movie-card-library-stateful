// implement MovieLibrary component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.movieHandle = this.movieHandle.bind(this);
  }
  onSearchTextChange() {
    console.log('test');
  }

  onBookmarkedChange() {
    console.log('teste4');
  }

  onSelectedGenreChange() {
    console.log('teste6');
  }

  movieHandle() {
    console.log('test');
  }
//codigo Bruno Nogueira 
  render() {
    return (
      <div>
         <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange('Strogonoff')}
          bookmarkedOnly={this.bookMarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange('Lasagna')}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange('Pizza')}
        />
        <div className="movie-list">
          <MovieList movies={this.props.movies} />
        </div>

        <AddMovie onClick={this.movieHandle} />
      </div>
    );
  }
}

export default MovieLibrary;
