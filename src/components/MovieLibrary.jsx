// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addMovieToList = this.addMovieToList.bind(this);
    // this.bookMarked = this.bookMarked.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  };

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  /*bookMarked({ bookmarkedOnly }) {
    let bookmarked = Boolean;
    if (bookmarkedOnly === true) bookmarked = true;
    return bookmarked;
  }; */

  addMovieToList(movie) {
    // escrever função que adiciona filme à lista
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    if (title && subtitle && storyline && imagePath !== '') {
      movies.push(movie);
      this.setState({ movies: movies });
    }
  };

  render() {

    const containingTextMovies = this.props.movies.filter((movie) => {
      const { searchText } = this.state;
      const movieString = `${movie.title} ${movie.subtitle} ${movie.storyline}`;
      if (movieString.toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase()) === true) return movie;
      else return undefined;
    });

    const filteredGenreMovies = containingTextMovies.filter((movie) => {
      const { selectedGenre } = this.state;
      if (selectedGenre !== '') return movie.genre === selectedGenre;
      else return movie;
    });

    const bookmarkedMovies = filteredGenreMovies.filter((movie) => {
      const { bookmarkedOnly } = this.state;
      if (bookmarkedOnly === true) return movie.bookmarked === true;
      else return movie;
      });

    /*
    const moviesArray = [...filteredGenreMovies, ...bookmarkedMovies, ...containingTextMovies]
    
    const filteredMovies = [...new Set(moviesArray)];
    */ /*
    const bookmarked = ({ bookmarked }, bookmarkedOnly) => {
      if (bookmarkedOnly === true && bookmarked === true) return true;
      return false;
    }

    const containingText = (movieText, searchText) => {
      if (movieText.toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase()) === true) return true;
      else return false;
    }

    const filteredMovies = movies.filter((movie) => {
      const { searchText, bookmarkedOnly, selectedGenre } = this.state;
      const movieString = `${movie.title} ${movie.subtitle} ${movie.storyline}`
      const bookMarked = bookmarked(movie, bookmarkedOnly);
      const movieText = containingText(movieString, searchText);

      if (bookMarked || movieText === true) return movie;
    });*/
    
    return (
      <div>
        <SearchBar
        searchText={this.state.searchText}
        onSearchTextChange={this.handleChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.handleChange}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.handleChange} />
        <MovieList movies={bookmarkedMovies} />
        <AddMovie onClick={this.addMovieToList}/>
      </div>
    );
  };
};

MovieLibrary.propTypes = {
  movies: PropTypes
  .arrayOf(PropTypes
    .objectOf([PropTypes.string, PropTypes.bool, PropTypes.number]))
    .isRequired,
};

export default MovieLibrary;
