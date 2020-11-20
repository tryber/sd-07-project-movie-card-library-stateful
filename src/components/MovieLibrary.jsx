import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  handleChange(event) {
    const name = event.target.name;
    const vallue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: vallue });
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          onBookmarkedChange={this.handleChange}
          onSelectedGenreChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie
          onClick=""
        />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.shape({})) };

MovieLibrary.defaultProps = { movies: PropTypes.arrayOf(PropTypes.shape({})) };
