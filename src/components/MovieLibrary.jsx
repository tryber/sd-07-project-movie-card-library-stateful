// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.type === 'checkbox' ? target.checked : target.value, });
  }

  onSearchTextChange({ search }) {
    this.setState({searchText: search});
  }

  onSelectedGenreChange({ option }) {
    this.setState({selectedGenre: option});
  }

  filterMovie() {
    return this.props.movies.filter((movie) => movie.title.includes(this.state.searchText));
  }
  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
          onSearchTextChange={this.onSearchTextChange}
        />
        <MovieList movies={this.filterMovie()} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
