import React, { Component } from "react";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies,
    };
  }
  onSearchTextChange = (event) => {
    this.setState({
        searchText: event.target.value
        // filter: event.target.value
    //   [event.target.name]: event.target.value,
    });
  };
  onBookmarkedChange = (event) => {
      this.setState({
        //   [event.target.onBookmarkedChange]: event.target.value,
      });
  };
  onSelectedGenreChange = (event) => {
    //   this.setState({
    //       [event.target.selectedGenre]: event.target.value,
    //   });
  };
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
