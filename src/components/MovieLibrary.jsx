import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.eventHandlerChange = this.eventHandlerChange.bind(this);
    this.eventAddMovie = this.eventAddMovie.bind(this);
    this.state = {
      textInput: '',
      markedBook: false,
      genreSelected: '',
      movies: this.props.movies,
    };
  }


  eventHandlerChange({ target: { name, value, checked } }) {
    let theValue = value;
    if (name === 'markedBook') {
      theValue = checked;
    }
    this.setState({ [name]: theValue });
  }

  eventAddMovie(object) {
    const array = this.state.movies.concat(object);
    this.setState({ movies: array });
  }

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.textInput}
          onSearchTextChange={this.eventHandlerChange}
          bookmarkedOnly={this.state.markedBook}
          onBookmarkedChange={this.eventHandlerChange}
          selectedGenre={this.state.genreSelected}
          onSelectedGenreChange={this.eventHandlerChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.eventAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })),
};

MovieLibrary.defaultProps = { movies: [] };
