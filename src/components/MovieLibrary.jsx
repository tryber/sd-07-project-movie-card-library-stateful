import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Movies from '../data.js';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.handlerInputMovieLibrary = this.handlerInputMovieLibrary.bind(this);
    this.Check = this.Check.bind(this);
  }
  Check(checkText) {
    if (checkText === 'searchText') {
      this.setState({
        movies: Movies.filter((item) =>
          item.title.includes(this.state.searchText),
        ),
      });
    }
    if (checkText === 'bookmarkedOnly' && this.state.bookmarkedOnly === true) {
      this.setState({ movies: Movies.filter((item) => item.bookmarked === true) });
    }
    if (checkText === 'selectedGenre') {
      this.setState({ movies: Movies.filter((item) => item.genre === this.state.selectedGenre) });
    }
  }

  handlerInputMovieLibrary({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    this.Check(name);
  }

  render() {
    console.log(Movies);
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handlerInputMovieLibrary}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handlerInputMovieLibrary}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handlerInputMovieLibrary}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
