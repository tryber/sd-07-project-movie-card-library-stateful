import React from "react";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies,
    };
    this.searchTextChange = this.searchTextChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.filteredListUpdate = this.filteredListUpdate.bind(this);
    this.insertMovie = this.insertMovie.bind(this);
  }

  filteredListUpdate({searchText, bookmarkedOnly, selectedGenre, movies}) {
    return (
      movies
      .filter(mov => !bookmarkedOnly || bookmarkedOnly === mov.bookmarked)
      .filter(mov => searchText === '' || (mov.title + mov.subtitle + mov.storyline)
      .toLowerCase().includes(searchText.toLowerCase()))
      .filter(mov => selectedGenre === '' || selectedGenre === mov.genre)
      );
  }

  searchTextChange({ target }) {
    const textNew = target.value;
    this.setState({ searchText: textNew });
  }

  bookmarkedChange({ target }) {
    const textNew = target.checked;
    this.setState({ bookmarkedOnly: textNew });    
  }

  selectedGenreChange({ target }) {
    const textNew = target.value;
    this.setState({ selectedGenre: textNew });
  }

  insertMovie({ subtitle, title, imagePath, storyline, rating, genre }) {
    const objInput = { subtitle, title, imagePath, storyline, rating, genre }
    
    this.setState((prevState, _prop) => {
      const arrInput = [...prevState.movies, objInput]
      return {...prevState , movies : arrInput}})
  }

  render() {
    return (
      < >
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.searchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.selectedGenreChange}
        />
        <MovieList movies={this.filteredListUpdate(this.state)} />
        <AddMovie onClick={this.insertMovie}/>
      </>
    );
  }
}

export default MovieLibrary;
