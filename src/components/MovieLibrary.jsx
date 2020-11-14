// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props); /* Chama o construtor do React.Component */
    this.handleChange = this.handleChange.bind(this);
/*     this.addNewMovie = this.addNewMovie.bind(this); */
    this.filterMovies = this.filterMovies.bind(this);
    this.filteredGenreFuncion = this.filteredGenreFuncion.bind(this);
    this.filteredBookMarkedFunction = this.filteredBookMarkedFunction.bind(this);
    this.filteredTextFunction = this.filteredTextFunction.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  filteredGenreFuncion(chosenGenre, moviesArray) {
    if (chosenGenre !== '') {
      return moviesArray.filter((movie) => movie.genre === chosenGenre);
    }
    return moviesArray;
  }

  filteredBookMarkedFunction(filteredGenre, isBookMarked) {
    if (isBookMarked !== false) {
      return filteredGenre.filter((movie) => movie.bookmarked === true);
    }
    return filteredGenre;
  }

  filteredTextFunction(filteredBookMarked, chosenText) {
    if (chosenText !== '') {
      return filteredBookMarked.filter((movie) =>
      movie.title.toLowerCase().includes(chosenText.toLowerCase()) === true ||
      movie.subtitle.toLowerCase().includes(chosenText.toLowerCase()) === true ||
      movie.storyline.toLowerCase().includes(chosenText.toLowerCase()) === true);
    }
    return filteredBookMarked;
  }

  filterMovies() {
    const moviesArray = this.state.movies;
    const chosenGenre = this.state.selectedGenre;
    const isBookMarked = this.state.bookmarkedOnly;
    const chosenText = this.state.searchText;
    const filteredGenre = this.filteredGenreFuncion(chosenGenre, moviesArray);
    const filteredBookMarked = this.filteredBookMarkedFunction(filteredGenre, isBookMarked);
    const filteredText = this.filteredTextFunction(filteredBookMarked, chosenText);

    console.log(filteredText);
    return filteredText;
    /* Colocar novo estado */
  }

/*   addNewMovie(newObject) {
    const newMovie = {
      title: newObject.title,
      subtitle: newObject.subtitle,
      storyline: newObject.imagePath,
      rating: newObject.storyline,
      imagePath: newObject.rating,
      genre: newObject.genre,
    };

    const moviesOldState = this.state.movies;
    this.setState((oldestArray) => ({ moviesOldState: [...oldestArray.movies, newObject] }));
  } */

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <AddMovie onClick={this.addNewMovie} />
        <MovieList movies={this.filterMovies()} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
