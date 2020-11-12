import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtroBolado = this.filtroBolado.bind(this);
    this.onSubmitAddMovie = this.onSubmitAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSubmitAddMovie(movie) {
    this.setState((prevState) => {
      return { movies: [...prevState.movies, movie] };
    });
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filtroBolado({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    return movies
      .filter((filme) => selectedGenre === '' || filme.genre === selectedGenre)
      .filter((filme) => (bookmarkedOnly ? filme.bookmarked : filme))
      .filter((filme) => {
        const text = `${filme.title} ${filme.subtitle} ${filme.storyline}`.toLowerCase();
        return text.includes(searchText.toLowerCase());
      });
  }

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filtroBolado(this.state)} />
        <hr />
        <AddMovie onClick={this.onSubmitAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

movies