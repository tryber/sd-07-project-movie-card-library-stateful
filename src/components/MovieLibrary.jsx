import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.changeSet = this.changeSet.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(e) {
    this.setState({ movies: [...this.props.movies, e] });
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
MovieLibrary.propTypes = {
  movies: PropTypes.array
}

export default MovieLibrary;
