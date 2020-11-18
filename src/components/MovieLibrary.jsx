// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.AddMovie = this.AddMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.type === 'checkbox' ? target.checked : target.value });
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText !== '') {
      return movies.filter((movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
      || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
      || movie.storyline.toUpperCase().includes(searchText.toUpperCase()));
    }
    if (selectedGenre !== '') {
      return movies
        .filter((movie) => movie.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return movies
        .filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    return movies;
  }

  AddMovie(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
          onSearchTextChange={this.onSearchTextChange}
        />
        <MovieList movies={this.filterMovie()} />
        <AddMovie onclick={this.AddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
