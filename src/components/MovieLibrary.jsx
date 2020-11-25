import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      moviesList: movies,
    };
  }

  handleChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(`NAME: ${id} - VALUE: ${value}`);
    this.setState({ [id]: value });
  }

  // filterByTitleOrSubtitle = (name) =>
    // movies.filter(
    //   (movie) => movie.title.contains(name) || movie.subtitle.contains(name)
    // );

  // filterByGenre = (genre) =>
  //   genre === "" ? movies : movies.filter((movie) => movie.genre === genre);

  // filterByBookmarked = () =>
  //   movies.filter((movie) => movie.bookmarked === true);

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={this.state.moviesList} />
        {/* <AddMovie props={} onChange={}/> */}
      </div>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: PropTypes.arrayOf(PropTypes.object),
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
};

export default MovieLibrary;
