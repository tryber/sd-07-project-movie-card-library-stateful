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
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.updateList = this.updateList.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      AllMovies: this.props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState(({ [name]: value }), this.updateList);
  }

  updateList() {
    const { searchText } = this.state;
    const movies = this.props.movies;
    const filterMovie = movies.filter(({ title, subtitle, storyline }) =>
    title.toLowerCase().includes(searchText.toLowerCase()) ||
    subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
    storyline.toLowerCase().includes(searchText.toLowerCase()));
    this.setState(({ AllMovies: filterMovie }));
  }

  handleMarkedChange() {
  }

  handleSelectedGenre() {

  }

  addMovie() {
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
          onSelectedGenreChange={this.handleSelectedGenre}
        />
        <MovieList movies={this.state.AllMovies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
