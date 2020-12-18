import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.buttonFunction = this.buttonFunction.bind(this);
    this.handleBookmarked = this.handleBookmarked.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  buttonFunction(value) {
    const { movies } = this.state;
    this.setState({ movies: movies.concat(value) });
  }

  handleSearchText({ target }) {
    const { movies } = this.props;
    const { searchText } = this.state;
    this.setState({ searchText: target.value }, () => {
      if (searchText === '') {
        this.setState({ [movies]: movies });
      } else {
        const text = movies.filter((movie) => (
          movie.title.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLocaleLowerCase())
        ));
        this.setState({ movies: text });
      }
    });
  }

  handleBookmarked({ target }) {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    this.setState({ bookmarkedOnly: target.checked }, () => {
      if (bookmarkedOnly) {
        const favorites = movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: favorites });
      } else {
        this.setState({ [movies]: movies });
      }
    });
  }

  handleSelectedGenre({ target }) {
    const { movies } = this.props;
    const { selectedGenre } = this.state;
    this.setState({ selectedGenre: target.value }, () => {
      if (selectedGenre === '') {
        this.setState({ [movies]: movies });
      } else {
        const genre = movies.filter((movie) => (movie.genre === selectedGenre));
        this.setState({ movies: genre });
      }
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleSearchText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleBookmarked}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleSelectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.buttonFunction} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
