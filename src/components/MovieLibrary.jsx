import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(newMovie) {
    const joined = this.state.movies.concat(newMovie);
    this.setState({ movies: joined });
  }

  filterMovies(allMovies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return allMovies.filter(
      (eachMovie) =>
        (bookmarkedOnly === true ? eachMovie.bookmarked === true : true) &&
        (selectedGenre === '' ? true : eachMovie.genre === selectedGenre) &&
        (searchText === ''
          ? true
          : eachMovie.title.includes(searchText) ||
            eachMovie.subtitle.includes(searchText) ||
            eachMovie.storyline.includes(searchText)),
    );
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const handleChange = this.handleChange;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={handleChange}
        />
        <MovieList movies={this.filterMovies(movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieLibrary;
