import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;

    this.setState({ searchText: value });
  }

  onBookmarkedChange() {
    /* Referência da linha de código abaixo: stackoverflow.com/questions/
    51480294/changing-the-state-of-a-checkbox-with-setstate/51509296 */
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;

    this.setState({ selectedGenre: value });
  }

  addMovieHandler(movieObject) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movieObject] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.addMovieHandler} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.array }.isRequired;

export default MovieLibrary;
