// implement MovieLibrary component here
import React from 'react';
import movies from '../data';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


// PAREI EM Configure o estado inicial do componente MovieLibray

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '', // checar porque this.props.movies não funciona
    };
  }

  render() {
    // const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
