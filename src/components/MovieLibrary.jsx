import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeOfText = this.handleChangeOfText.bind(this);
    this.handleChangeOfMarked = this.handleChangeOfMarked.bind(this);
    this.updateByText = this.updateByText.bind(this);
    this.updateByChecked = this.updateByChecked.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChangeOfText({ target }) {
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const { value } = target;
    this.setState({ searchText: value });
    this.updateByText();
  }

  handleChangeOfMarked({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
    this.updateByChecked();
  }

  updateByText() {
    const { movies, searchText } = this.state;
    const newList = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    this.setState({ movies: newList });
  }

  updateByChecked() {
    const { movies, bookmarkedOnly } = this.state;
    const newList = movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    this.setState({ movies: newList });
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
          onSearchTextChange={this.handleChangeOfText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChangeOfMarked}
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
