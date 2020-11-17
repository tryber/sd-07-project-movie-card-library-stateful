import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.handleMarkedChange = this.handleMarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterText = this.filterText.bind(this);
    this.updateList = this.updateList.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      AllMovies: this.props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }), () => this.updateList());
  }

  onSelectedGenreChange(selectedGenre) {
    return this.props.movies.filter((movie) => movie.genre.includes(selectedGenre));
  }

  handleMarkedChange() {
    return this.props.movies.filter((movie) => movie.bookmarked === true);
  }

  updateList() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    let filterMovie = this.props.movies;

    if (bookmarkedOnly) {
      filterMovie = this.handleMarkedChange();
    }
    if (selectedGenre !== '') {
      filterMovie = this.onSelectedGenreChange(selectedGenre);
    }
    if (searchText !== '') {
      filterMovie = this.filterText(searchText);
    }
    this.setState(({ AllMovies: filterMovie }));
  }

  filterText(searchText) {
    return this.props.movies.filter(({ title, subtitle, storyline }) =>
    title.toLowerCase().includes(searchText.toLowerCase()) ||
    subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
    storyline.toLowerCase().includes(searchText.toLowerCase()));
  }

  handleAddMovie(newMovie) {
    return this.setState((beforeValue) => ({ AllMovies: [...beforeValue.AllMovies, newMovie] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onSearchTextChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSearchTextChange}
        />
        <MovieList movies={this.state.AllMovies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
