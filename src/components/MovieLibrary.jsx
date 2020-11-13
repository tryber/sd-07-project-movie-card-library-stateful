import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      filteredMovies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ [event.target.name]: event.target.checked });
  }

  onSelectedGenreChange() {
    //
  }

  handleAddClick(newMovieObj) {
    const newMoviesArray = this.props.movies.push(newMovieObj);
    this.setState({ movies: newMoviesArray });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.handleAddClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  // searchText: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // filteredMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
