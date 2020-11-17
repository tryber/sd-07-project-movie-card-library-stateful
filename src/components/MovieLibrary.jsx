import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.changeFunc = this.changeFunc.bind(this);
    this.state = {};
  }

  changeFunc({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeFunc}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeFunc}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeFunc}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}
MovieLibrary.defaultProps = {
  movies: {
    title: 'string',
    imagePath: 'string',
    subtitle: 'string',
    storyline: 'string',
    rating: 10,
  },
};
MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieLibrary;
