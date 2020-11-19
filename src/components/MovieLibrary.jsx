import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetChange = this.handleSetChange.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  handleSetChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  addMovie(add) {
    this.setState((state) => ({ movies: state.movies.concat(add) }));
  }

  filterMovies() {
    console.log('oi');
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    // const filteredMovie = this.state.filter((movie) => movie.includes(this.state))
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    selectedGenre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieLibrary;
