import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // Retirar prop
    const prop = this.props;
    this.onClick = this.onClick.bind(this);
    this.SearchTextChange = this.SearchTextChange.bind(this);
    this.BookmarkedChange = this.BookmarkedChange.bind(this);
    this.SelectedGenreChange = this.SelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: prop.movies,
    };
  }

  onClick(e) {
    const prop = this.props;
    this.setState({ movies: [...prop.movies, e] });
  }
  // Poderia ser só um método... Vamos ver se o CC deixa
  SearchTextChange(value) {
    const filterMovies = this.state.movies.filter((element) =>
      element.title.includes(value) ||
      element.subtitle.includes(value) ||
      element.storyline.includes(value),
    );
    this.setState({
      searchText: value,
      movies: filterMovies,
    });
  }
 // Poderia ser só um método... Vamos ver se o CC deixa
  BookmarkedChange(value) {
    this.setState({
      bookmarkedOnly: value,
      movies: this.state.movies.filter((e) => e.bookmarked),
    });
  }
 // Poderia ser só um método... Vamos ver se o CC deixa
  SelectedGenreChange(value) {
    this.setState({
      selectedGenre: value,
      movies: this.state.movies.filter(
        (element) => element.genre.includes(value),
      ),
    });
  }

  render() {
    return (
      <div>
        <h2> MovieLibrary Funciona</h2>
        <SearchBar
          {...this.state}
          onSearchTextChange={this.SearchTextChange}
          onBookmarkedChange={this.BookmarkedChange}
          onSelectedGenreChange={this.SelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
