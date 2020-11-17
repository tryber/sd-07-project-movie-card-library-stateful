import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.newMovie = this.newMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      };
  }

  newMovie(movie) {
    this.setState((oldState) => oldState.movies.push(movie));
  }
  
  render() {
    const { movies } = this.state
    return(<div>
      <SearchBar searchText=''
      onSearchTextChange=''
      bookmarkedOnly=''
      onBookmarkedChange=''
      selectedGenre=''
      onSelectedGenreChange='' />
      <MovieList movies={movies} />
      <AddMovie newMovie={this.newMovie} />
    </div>)
  }
}

export default MovieLibrary;
