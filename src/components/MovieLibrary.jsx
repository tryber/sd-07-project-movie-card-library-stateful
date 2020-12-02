import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedOnlyChange = this.handleBookmarkedOnlyChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }


  handleSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  handleBookmarkedOnlyChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  handleSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    if (bookmarkedOnly) return movies.filter((movie) => movie.bookmarked === true);
    if (selectedGenre !== '') return movies.filter((movie) => movie.genre === selectedGenre);
    if (searchText !== '') {
      return movies.filter(
        (movie) => ((movie.title.includes(searchText))
  || (movie.subtitle.includes(searchText))
  || (movie.storyline.includes(searchText))),
      );
    }
    return movies;
  }
//  solução pós consulta PR MunizDev
  addNewMovie(newMovie) {
    const joined = this.state.movies.concat(newMovie);
    this.setState({ movies: joined });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleBookmarkedOnlyChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleSelectedGenreChange}
        />
        <AddMovie onClick={this.addNewMovie} />
        <MovieList movies={this.filterMovies()} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };


export default MovieLibrary;
