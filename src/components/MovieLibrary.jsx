import React from 'react';
import PropTypes, { object } from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.eventChange = this.eventChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // prettier-ignore
  onClick(newMovie) {
    this.setState((previousState) => ({ movies: previousState.movies.concat(newMovie) }));
  }

  eventChange({ target }) {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div className="movie-library">
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.eventChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.eventChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.eventChange}
        />

        <MovieList
          // prettier-ignore
          movies={movies
            .filter(
              (element) => element.title.includes(searchText)
              || element.subtitle.includes(searchText)
              || element.storyline.includes(searchText),
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
