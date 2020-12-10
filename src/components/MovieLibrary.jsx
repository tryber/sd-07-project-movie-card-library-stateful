import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList
          movies={movies}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          searchText={searchText}
        />
        <AddMovie
          onClick={(newMovie) => {
            this.setState({ movies: [...this.state.movies, newMovie] });
          }}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.props }.isRequired;

export default MovieLibrary;
