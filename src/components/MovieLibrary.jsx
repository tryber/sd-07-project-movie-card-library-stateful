import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);


    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const text = target.value;
    const { movies } = this.props;

    const filterMoviesByText = movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      return (
        title.includes(text) ||
        subtitle.includes(text) ||
        storyline.includes(text)
      );
    });

    this.setState({
      searchText: text,
      movies: filterMoviesByText,
    });
  }

  onBookmarkedChange({ target }) {
    const favorite = target.checked;
    const { movies } = this.props;
    let filterFavMovies = movies;

    if (favorite) filterFavMovies = movies.filter((movie) => movie.bookmarked === favorite);

    this.setState({
      bookmarkedOnly: favorite,
      movies: filterFavMovies,
    });
  }

  onSelectedGenreChange({ target }) {
    const genre = target.value;
    const { movies } = this.props;

    const filterByGenre = movies.filter((movie) => movie.genre === genre);

    this.setState({
      selectedGenre: genre,
      movies: filterByGenre,
    });
  }

  onClick(stateOfAddMovie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, stateOfAddMovie] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
