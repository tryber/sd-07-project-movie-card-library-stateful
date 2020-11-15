/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(newCard) {
    this.setState((estadoAnterior) => ({ movies: [...estadoAnterior.movies, newCard] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const movieFilter = (value.length) ? movies.filter((movie) => {
      const card = movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value);
      return card;
    }) : movies;
    this.setState({
      searchText: value,
      movies: movieFilter,
    });
  }

  onBookmarkedChange({ target }) {
    const { cheked } = target;
    const { movies } = this.state;
    const movieFilter = (cheked) ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState({
      bookmarkedOnly: target.checked,
      movies: movieFilter,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const movieFilter = (value) ? movies.filter((movie) => movie.genre === value) : movies;
    this.setState({
      selectedGenre: value,
      movies: movieFilter,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
