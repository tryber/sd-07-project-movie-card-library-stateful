// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.resetState = this.resetState.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.setNewMovie = this.setNewMovie.bind(this);
    this.onHandleNewMovie = this.onHandleNewMovie.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseStateNewMovie = {
      subtitle: this.state.subtitle,
      title: this.state.title,
      imagePath: this.state.imagePath,
      storyline: this.state.storyline,
      rating: this.state.rating,
      genre: this.state.genre,
    };
  }

  resetState() {
    this.setState(this.baseStateNewMovie);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
    this.filterMovies(event.target.value);
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  }

  onHandleNewMovie({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onClick(event) {
    event.preventDefault();
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const movie = {
      title: title,
      subtitle: subtitle,
      imagePath: imagePath,
      storyline: storyline,
      rating: rating,
      genre: genre,
    };
    const { movies } = this.props;
    this.setState({ movies: [...movies, movie] });

    this.resetState();
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie
          subtitle={this.state.subtitle}
          title={this.state.title}
          imagePath={this.state.imagePath}
          storyline={this.state.storyline}
          rating={this.state.rating}
          genre={this.state.rating}
          onHandleNewMovie={this.onHandleNewMovie}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
