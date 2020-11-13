// implement MovieLibrary component here
import React from 'react';
import data from '../data';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


// PAREI EM Configure o estado inicial do componente MovieLibray

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data,
    };
  }

  handleChanges({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChanges}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChanges}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChanges}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
