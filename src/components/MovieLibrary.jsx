import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.searchUpdateState = this.searchUpdateState.bind(this);
    this.filter = this.filter.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(novoFilme) {
    const joined = this.state.movies.concat(novoFilme);
    this.setState({ movies: joined });
  }

  filter(allMovies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return allMovies.filter(
      (cadafilme) => (bookmarkedOnly === true ? cadafilme.bookmarked === true : true)
        && (selectedGenre === '' ? true : cadafilme.genre === selectedGenre)
        && (searchText === ''
          ? true
          : cadafilme.title.includes(searchText)
            || cadafilme.subtitle.includes(searchText)
            || cadafilme.storyline.includes(searchText)),
    );
  }

  searchUpdateState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.searchUpdateState}
          onBookmarkedChange={this.searchUpdateState}
          onSelectedGenreChange={this.searchUpdateState}
        />
        <MovieList movies={this.filter(movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};
export default MovieLibrary;
