// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleAddMovie() {
    console.log(this.state.movies);
  }
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
