import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterMovies() {
    const filteredMovies = [];
    const movies = this.state.movies;
    const bookmarkedOnly = this.state.bookmarkedOnly;
    const selectedGenre = this.state.selectedGenre;
    if (bookmarkedOnly) return movies.filter((movie) => movie.bookmarked === true); // @CarolSi-hub
    movies.forEach((movie) => {
      const text = this.state.searchText;
      const { title, subtitle, storyline } = movie;
      if (selectedGenre !== '') return movies.filter((element) => element.genre === selectedGenre); // @CarolSi-hub
      if (text === ''
        || title.includes(text)
        || subtitle.includes(text)
        || storyline.includes(text)
      ) {
        filteredMovies.push(movie);
      }
      return filteredMovies;
    });
    return filteredMovies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
// Só fiz o propTypes após vez o exemplo de link de como usar o arrayOf com PropTypes.shape():
// https://til.hashrocket.com/posts/ytrzhrpfxk-proptypes-array-of-shape e o repositório da @CarolSi-hub
