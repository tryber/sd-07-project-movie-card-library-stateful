import React, { Component } from 'react';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
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
    // const prop = this.props;
    return (
      <div>
        <h2> MovieLibrary Funciona</h2>
        <SearchBar
          {...this.state}
          onSearchTextChange={this.SearchTextChange}
          onBookmarkedChange={this.BookmarkedChange}
          onSelectedGenreChange={this.SelectedGenreChange}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

/* <MovieList movies={prop.movies} />
*/
