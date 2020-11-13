import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // Retirar prop
    const prop = this.props;
    this.SearchTextChange = this.SearchTextChange.bind(this);
    this.BookmarkedChange = this.BookmarkedChange.bind(this);
    this.SelectedGenreChange = this.SelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: prop.movies,
    };
  }
  // Poderia ser só um método... Vamos ver se o CC deixa
  onClick() {
    return '';
  }

  SearchTextChange(valeu) {
    this.setState({ searchText: valeu });
  }

  BookmarkedChange(valeu) {
    this.setState({ bookmarkedOnly: valeu });
  }

  SelectedGenreChange(valeu) {
    this.setState({ selectedGenre: valeu });
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
