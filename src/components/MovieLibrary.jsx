import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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
      selectGenre: '',
    };
  }

  handleChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          onSelectGenreChange={this.handleChange}
        />
        <MovieList movies={this.props.movies} />
        {/* <AddMovie props={} onChange={}/> */}
      </div>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: PropTypes.arrayOf(PropTypes.object),
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  // searchText: PropTypes.string,
  // bookmarked: PropTypes.bool,
  // selectedGenre: PropTypes.string,
};

export default MovieLibrary;
