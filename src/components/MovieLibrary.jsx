import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  addNewMovie({
    subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  }) {
    const newMovie = {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    };
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
