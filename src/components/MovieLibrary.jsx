import React from 'react';
import PropTypes, { object } from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
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

  onClick(newMovie) {
    const { movies } = this.state;
    movies.push(newMovie);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

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
          movies={movies
            .filter(
              (element) =>
                element.title.includes(searchText) ||
                element.subtitle.includes(searchText) ||
                element.storyline.includes(searchText),
            )
            .filter((element) => (bookmarkedOnly ? element.bookmarked : true))
            .filter((element) => element.genre.includes(selectedGenre))}
        />

        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(object).isRequired };

export default MovieLibrary;
