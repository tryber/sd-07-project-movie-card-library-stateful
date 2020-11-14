import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.addMovie = this.addMovie.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  search({ target }) {
    this.setState({ [target.name]: target.value });
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: state.movies.concat(movie) }));
  }

  searchResult() {
    const result = this.state.movies.filter(({ title, subtitle, storyline }) => title
      .includes(this.state.searchText) ||
      subtitle.includes(this.state.searchText) ||
      storyline.includes(this.state.searchText))
      .filter(({ genre }) => genre.includes(this.state.selectedGenre));
    return result;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.search}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.search}
        />
        <AddMovie onClick={this.addMovie} />
        <MovieList movies={this.searchResult()} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
