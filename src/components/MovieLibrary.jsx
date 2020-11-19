import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.moviesFiltered = this.moviesFiltered.bind(this);
    this.handleSetstate = this.handleSetstate.bind(this);
    this.addMovies = this.addMovies.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  addMovies(movie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movie] }));
  }

  moviesFiltered() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    searchText.toLowerCase();
    let filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText) ||
    movie.subtitle.toLowerCase().includes(searchText) ||
    movie.storyline.toLowerCase().includes(searchText),
    );

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    return filteredMovies;
  }

  handleSetstate({ target }) {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [name]: value });
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div className="panel">
        <h2>My awesome movie library</h2>
        <SearchBar
          onSearchTextChange={this.handleSetstate}
          searchText={searchText}
          onBookmarkedChange={this.handleSetstate}
          bookmarkedOnly={bookmarkedOnly}
          onSelectedGenreChange={this.handleSetstate}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={this.moviesFiltered()} />
        <AddMovie onClick={this.addMovies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
