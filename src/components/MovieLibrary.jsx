// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.genre = this.genre.bind(this);
    this.button = this.button.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  genre({ target }) {
    const { selectedGenre } = target;
    const value = target.value;

    this.setState({ [selectedGenre]: value });
  }

  button(movie) {
    const { movies } = this.props;
    this.setState(() => movies.push(movie));
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.genre}
        />
        <MovieList movies={movies} />
        <AddMovie button={this.button} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
