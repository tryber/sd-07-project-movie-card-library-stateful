import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const filterMovie = value !== '' ? movies.filter((movie) => movie.title.includes(value)
    || movie.subtitle.includes(value)
    || movie.storyline.includes(value)) : movies;
    this.setState(() => ({ searchText: value, movies: filterMovie }));
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.state;
    const { checked } = target;
    const filterMovie = checked ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState(() => ({ bookmarkedOnly: checked, movies: filterMovie }));
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const filterMovie = value !== '' ? movies.filter((movie) => movie.genre === value) : movies;
    this.setState(() => ({ selectedGenre: value, movies: filterMovie }));
  }

  addNewMovie(movieToAdd) {
    this.setState((prevState) => ({ movies: [...prevState.movies, movieToAdd] }));
  }


  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.shape()).isRequired };

export default MovieLibrary;
