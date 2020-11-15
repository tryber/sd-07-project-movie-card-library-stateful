// implement MovieLibrary component here
import React from "react";
import SearchBar from "./SearchBar";

export default class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies,
    };
  }
  render() {
    return (
      <SearchBar
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
      />
    );
  }
}
