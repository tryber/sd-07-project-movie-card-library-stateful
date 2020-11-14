// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleFilterMovie = this.handleFilterMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.handleFilterMovie(); });
  }

  handleAddMovie(addMovie) {
    this.setState((oldState) => ({ movies: [...oldState.movies, addMovie] }));
  }


  // Solução de filtro da Rebeca Santos T06
  handleFilterMovie() {
    let myMovies = this.props.movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly) myMovies = myMovies.filter((movie) => movie.bookmarked === true);
    if (selectedGenre !== '') myMovies = myMovies.filter((movie) => movie.genre === selectedGenre);
    if (searchText !== '') {
      myMovies = myMovies.filter((movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText),
      );
    }
    console.log(myMovies);
    this.setState({ movies: myMovies });
  }
  render() {
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
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
