import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  handleOnSubmit(movie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movie] }));
  }

  filterSearch({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    return movies
      .filter((filme) => selectedGenre === '' || filme.genre === selectedGenre)
      .filter((filme) => (bookmarkedOnly ? filme.bookmarked : filme))
      .filter((filme) => {
        const text = `${filme.title} ${filme.subtitle} ${filme.storyline}`.toLowerCase();
        return text.includes(searchText.toLowerCase());
      });
  }

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterSearch(this.state)} />
        <AddMovie onClick={this.handleOnSubmit} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.array }.isRequired;

export default MovieLibrary;
