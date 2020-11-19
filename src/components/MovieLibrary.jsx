// implement MovieLibrary component here
import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: [],
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }
  onBookmarkedChange({ target }) {
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  }
  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          onSearchTextChange={this.onSearchTextChange}
          searchText={this.state.searchText}
          onBookmarkedChange={this.onBookmarkedChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onSelectedGenreChange={this.onSelectedGenreChange}
          selectedGenre={this.state.selectedGenre}
        />
        <AddMovie />
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.bool.isRequired };

export default MovieLibrary;
