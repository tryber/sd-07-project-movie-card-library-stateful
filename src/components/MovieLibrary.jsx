import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
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

  filterMovies() {
    const filteredMovies = [];
    const movies = this.state.movies;

    movies.forEach((movie) => {
      const text = this.state.searchText;
      const bookmarkedOnly = this.state.bookmarkedOnly;
      if (text === '' && bookmarkedOnly === false) {
        filteredMovies.push(movie);
      } else {
        const titleMovie = movie.title;
        if (titleMovie.includes(text)) {
          filteredMovies.push(movie);
        } else if (bookmarkedOnly && movie.bookmarked) {
          filteredMovies.push(movie);
        }
      }
    });

    return filteredMovies;
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
        <MovieList movies={this.filterMovies()} />
      </div>
    );
  }
}
