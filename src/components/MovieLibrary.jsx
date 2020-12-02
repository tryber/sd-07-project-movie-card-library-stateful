import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

export default class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  filterMovies() {
    let filteredMovies = [];
    
    movies.forEach((movie) => {
      const text = this.state.searchText;
      const bookmarkedOnly = this.state.bookmarkedOnly;
      if (text === '' && bookmarkedOnly === false) {
        filteredMovies.push(movie);
      } else {
        let titleMovie = movie.title;
        if (titleMovie.includes(text)) {
          filteredMovies.push(movie)
        } else if (bookmarkedOnly && movie.bookmarked) {
          filteredMovies.push(movie)
        }
      }
    })

    return filteredMovies;
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies()}/>
      </div>
    );
  }
}
