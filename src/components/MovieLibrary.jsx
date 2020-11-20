import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState(() => ({ searchText: value }));
    if (value !== '') {
      const { movies } = this.state;
      const selectedMovies = movies.filter((movie) =>
        movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value),
      );
      this.setState(() => ({ movies: selectedMovies }));
    }
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState(() => ({ bookmarkedOnly: checked }));
    if (checked) {
      const { movies } = this.state;
      const selectedMovies = movies.filter((movie) => movie.bookmarked === true);
      this.setState(() => ({ movies: selectedMovies }));
    }
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState(() => ({ selectedGenre: value }));
    if (value !== '') {
      const { movies } = this.state;
      const selectedMovies = movies.filter((movie) => movie.genre === value);
      this.setState(() => ({ movies: selectedMovies }));
    }
}

  addNewMovie(newMovie) {
    this.setState((previousState) => ({ movies: previousState.movies.concat(newMovie) }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
