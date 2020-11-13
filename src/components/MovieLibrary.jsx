import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      onBookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(movie) {
    this.setState((previousState) => ({ movies: previousState.movies.concat(movie) }));
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList
          movies={movies.filter((movie) => movie.title.includes(searchText)
          || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText))
          .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
          .filter((movie) => movie.genre.includes(selectedGenre))}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
