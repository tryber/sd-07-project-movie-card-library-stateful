import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
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
  
  filterFilms() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const moviesInState = this.state.movies;
    let filteredFilms;
    if ( bookmarkedOnly === true) {
      filteredFilms = moviesInState.filter((movie) => ( movie.bookmarked === true ))
    }
    // else if (bookmarkedOnly === false) {
    //   filteredFilms = moviesInSt
    // } 
    
    // {
    //   filteredFilms = moviesInState.filter((movie) => {
    //     movie.title.toLowerCase().includes(searchValue.toLowerCase()) === true ||
    //     movie.subtitle.toLowerCase().includes(searchValue.toLowerCase()) === true ||
    //     movie.storyline.toLowerCase().includes(searchValue.toLowerCase()) === true
        
    //   })
    // }
    this.setState(() => ({ movies: filteredFilms}));
  }


  addMovie(movie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movie] }));
  }

  changeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'option' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly }, () => this.filterFilms(this.state.bookmarkedOnly));
  }

  onSearchTextChange({ target }) {
    const value = target.type === 'option' ? target.checked : target.value;

    this.setState({ searchText: value });
  }

  onSelectedGenreChange({ target }) {
    const value = target.type === 'option' ? target.checked : target.value;
    console.log(value);
    this.setState({ selectedGenre: value });
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
        <AddMovie addMovie={this.addMovie} />
      </div>
    );
  }

}

export default MovieLibrary;
