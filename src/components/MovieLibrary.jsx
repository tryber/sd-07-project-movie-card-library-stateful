import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked }, () => this.filterBookMarked());
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value }, () => {
      this.filterSearchBar();
    });
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      this.filterSearchTextChange();
    });
  }

  filterBookMarked() {
    const { movies } = this.props;
    const z = movies.filter((element) => element.bookmarked === this.state.bookmarkedOnly);
    this.setState({ movies: z });
  }

  filterSearchTextChange() {
    const { searchText } = this.state;
    const { movies } = this.props;
    const y = movies.filter(({ title, storyline, subtitle }) => storyline.includes(searchText)
    || title.includes(searchText)
    || subtitle.includes(searchText));
    this.setState({ movies: y });
  }

  filterSearchBar() {
    const { movies } = this.props;
    const x = movies.filter((element) => element.genre === this.state.selectedGenre);
    this.setState({ movies: x });
  }

  handleAddMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: movies.concat(movie) });
  }

  render() {
    const { movies } = this.state;
    const { searchText } = this.state;
    const { selectedGenre } = this.state;
    const { bookmarkedOnly } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie handleAddMovie={this.handleAddMovie} />

      </div>
    );
  }
}
MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };
export default MovieLibrary;
