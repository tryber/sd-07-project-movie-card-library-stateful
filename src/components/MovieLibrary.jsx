import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // Retirar prop
    const prop = this.props;
    this.onClick = this.onClick.bind(this);
    this.changeSet = this.changeSet.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: prop.movies,
    };
  }

  onClick(e) {
    // Retirar prop
    const prop = this.props;
    this.setState({ movies: [...prop.movies, e] });
  }

  changeSet(key, value, callback) {
    this.setState({
      [key]: value,
      movies: callback(this.state.movies, value),
    });
  }

  render() {
    const { state, changeSet, onClick } = this;
    return (
      <div>
        <h2> MovieLibrary Funciona</h2>
        <SearchBar
          {...state}
          onSearchTextChange={changeSet}
          onBookmarkedChange={changeSet}
          onSelectedGenreChange={changeSet}
        />
        <MovieList movies={state.movies} />
        <AddMovie onClick={onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
