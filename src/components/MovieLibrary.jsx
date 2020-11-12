import React from 'react';
import PropTypes, { object } from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.eventHandle = this.eventHandle.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  eventHandle() {}

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />

        <MovieList
          movies={movies.filter(
            (element) =>
              element.title.includes(searchText) ||
              element.subtitle.includes(searchText) ||
              element.storyline.includes(searchText),
          )}
        />

        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(object).isRequired };

export default MovieLibrary;
