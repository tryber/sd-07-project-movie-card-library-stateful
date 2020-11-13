import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  addMovie(movie) {
    console.log('CHAMOU A FUNÇÃO!');
    this.setState((estadoAnterior) => ({ movies: [...estadoAnterior.movies, movie] }));
  }

  changeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'option' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    return (
      <div className="movie-library">
        <SearchBar
          searchText={searchText}
          // onSearchTextChange={}
          bookmarkedOnly={bookmarkedOnly}
          // onBookmarkedChange={}
          selectedGenre={selectedGenre}
          // onSelectedGenreChange={}
          movies={movies}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie addMovie={this.addMovie} />
      </div>
    );
  }

}

export default MovieLibrary;
