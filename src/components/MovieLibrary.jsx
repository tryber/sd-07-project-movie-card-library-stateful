import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      filteredMovies: this.props.movies,
    };
    this.filterList = this.filterList.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  onSearchChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((previousState) => ({
      ...previousState,
      [target.name]: value,
    }));
    this.filterList();
  }

  filterList() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const textFilteredList = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    const filteredList = this.filterByChecks(textFilteredList, bookmarkedOnly, selectedGenre);
    
    this.setState((previousState) => ({
      ...previousState,
      filteredMovies: filteredList,
    }));
  }

  filterByChecks(textFilteredList, bookmarkedOnly, selectedGenre) {
    return textFilteredList
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked === true : true)
      && (selectedGenre ? movie.genre === selectedGenre : true));
  }

  handleAddClick(newMovieObj) {
    const newMoviesArray = this.props.movies.concat(newMovieObj);
    console.log(newMoviesArray);
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMoviesArray],
      filteredMovies: [...prevState.movies, newMoviesArray],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onSearchChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSearchChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.handleAddClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
