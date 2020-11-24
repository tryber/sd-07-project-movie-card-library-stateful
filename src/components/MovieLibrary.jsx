// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      MovieData: movies,
      filteredMovieData: movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieToData = this.addMovieToData.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ [event.target.name]: event.target.value },
      () => this.filterMovieList());
  }

  onBookmarkedChange(event) { // event.target.name é null dentro do prevState, pk?
    const eventTargetName = event.target.name;
    this.setState((prevState) => ({ [eventTargetName]: !prevState.bookmarkedOnly }),
    () => {
      console.log(this.state.bookmarkedOnly);
      this.filterFavoriteList();
    });
  }

  onSelectedGenreChange(event) {
    this.setState({ [event.target.name]: event.target.value },
      () => {
        console.log(this.state.selectedGenre);
        this.filterGenreList();
      });
  }
  filterMovieList() {
    this.setState((prevState) => ({
      filteredMovieData: prevState.MovieData
      .filter(({ title, subtitle, storyline }) => (title.includes(this.state.searchText) ||
        subtitle.includes(this.state.searchText) ||
        storyline.includes(this.state.searchText))),
    }), () => console.log(this.state.filteredMovieData));
  }

  filterGenreList() {
    this.setState((prevState) => {
      if (this.state.selectedGenre === '') {
        return { filteredMovieData: prevState.MovieData };
      }
      return {
        filteredMovieData: prevState.MovieData
          .filter(({ genre }) => genre === this.state.selectedGenre),
      };
    }, () => console.log(this.state.filteredMovieData));
  }

  filterFavoriteList() {
    if (this.state.bookmarkedOnly) {
      this.setState((prevState) => ({
        filteredMovieData: prevState.MovieData
        .filter(({ bookmarked }) => bookmarked === true),
      }), () => console.log(this.state.filteredMovieData));
    } else {
      this.setState((prevState) => ({ filteredMovieData: prevState.MovieData }),
    () => console.log(this.state.filteredMovieData));
    }
  }

  addMovieToData(newMovie) {
    this.setState(({ MovieData }) => {
      const addNewMovie = [...MovieData, newMovie];
      return { MovieData: addNewMovie, filteredMovieData: addNewMovie };
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.filteredMovieData} />
        <AddMovie onClick={this.addMovieToData} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
