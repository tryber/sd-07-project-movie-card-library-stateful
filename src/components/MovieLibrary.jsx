// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.AddingMovie = this.AddingMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({
      selectedGenre: value,
    });
  }

  filteredMovies(allStates) {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = allStates;

    const bookMarkedFilter = movies.filter((movie) => {
      if (bookmarkedOnly) return movie.bookmarked;
      return movie;
    });

    const genreFilter = bookMarkedFilter.filter(({ genre }) => {
      return selectedGenre === '' || genre === selectedGenre;
    });

    return genreFilter.filter(({ title, subtitle, storyline }) => {
      const movieInfo = `${title} - ${subtitle} - ${storyline}`;
      return movieInfo.includes(searchText);
    });
  }

  AddingMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filteredMovies(this.state)} />
        <AddMovie onClick={this.AddingMovie} />
      </React.Fragment>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MovieLibrary;
