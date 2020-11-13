// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  onSearchTextChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }
  onBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.checked;
    this.setState({ [name]: value });
  }
  onSelectedGenreChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }
  onClick(state) {
    const movie = state;

    // Executa a callback passada para o componente `AddMovie` via props,
    // chamada `onClick`, que recebe como parâmetro o estado atual de `AddMovie`;
  }
  render() {
    const list = this.props.movies;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList
          movies={list.filter(() => {
            console.log(this.state);
            return true;
          })}
        />
        {/* <MovieList
        movies={list.filter((movie) => movie.genre === this.state.selectedGenre)} /> */}
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf().isRequired };

export default MovieLibrary;
