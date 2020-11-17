import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.filterByCheck = this.filterByCheck.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      moviesFiltered: movies,
    };
  }

  onSearchTextChange({ target }) {
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const { value } = target;
    this.setState({ searchText: value }, this.filterMovies);
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked }, this.filterMovies);
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    if (value !== '') {
      this.setState({ selectedGenre: value }, this.filterMovies);
    }
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const newArrayOfMovies = movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    const finalList = this.filterByCheck(newArrayOfMovies, bookmarkedOnly, selectedGenre);
    this.setState({ moviesFiltered: finalList });
  }

  //  Trecho inspirado no código de Álvaro Vasconcelos
  filterByCheck(newArrayOfMovies, bookmarkedOnly, selectedGenre) {
    return newArrayOfMovies.filter((movie) => (bookmarkedOnly ? movie.bookmarked : true)
      && (selectedGenre ? movie.genre === selectedGenre : true));
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
    const { moviesFiltered } = this.state;
    this.setState({ moviesFiltered: [...moviesFiltered, newMovie] });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      moviesFiltered,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={moviesFiltered} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
