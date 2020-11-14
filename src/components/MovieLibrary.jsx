import React from 'react';
import Proptypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.addMovie = this.addMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterFilms = this.filterFilms.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly }, () => this.filterFilms());
  }

  onSearchTextChange({ target }) {
    const value = target.type === 'option' ? target.checked : target.value;

    this.setState({ searchText: value }, () => this.filterFilms());
  }

  onSelectedGenreChange({ target }) {
    const value = target.type === 'option' ? target.checked : target.value;
    this.setState({ selectedGenre: value }, () => this.filterFilms());
  }

  onClick(movie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movie] }));
  }

  filterFilms() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredFilms = movies;
    if (bookmarkedOnly === true) {
      filteredFilms = movies.filter((movie) => (movie.bookmarked === true));
    } else {
      filteredFilms = this.props.movies;
    }

    if (selectedGenre !== '') {
      filteredFilms = filteredFilms.filter((movie) => {
        if (movie.genre === selectedGenre) return true;
        return false;
      });
    }

    if (searchText) {
      filteredFilms = filteredFilms.filter((movie) => {
        if (movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(searchText.toLowerCase())) { return true; }
        return false;
      });
    }
    this.setState(() => ({ movies: filteredFilms }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
          movies={movies}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }

}

MovieLibrary.propTypes = { movies: Proptypes.arrayOf(Proptypes.object).isRequired };

export default MovieLibrary;
