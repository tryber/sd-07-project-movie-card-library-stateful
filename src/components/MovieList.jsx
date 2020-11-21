import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.loadFilter.bind(this);
  }

  loadFilter() {
    let {
      movies,
      selectedGenre = '',
      bookmarkedOnly,
    } = this.props;
    const { searchText = '' } = this.props;
    if (selectedGenre !== '') {
      movies = movies.filter((element) => element.genre === selectedGenre);
      selectedGenre = '';
    }
    if (bookmarkedOnly === true) {
      movies = movies.filter((element) => element.bookmarked === true);
      bookmarkedOnly = false;
    }
    const searchTitle = movies.filter((element) =>
    element.title.toLowerCase().includes(searchText.toLowerCase()));
    const searchSubtitle = movies.filter((element) =>
    element.subtitle.toLowerCase().includes(searchText.toLowerCase()));
    const searchStoryline = movies.filter((element) =>
    element.storyline.toLowerCase().includes(searchText.toLowerCase()));
    const newSearch = [...searchTitle, ...searchSubtitle, ...searchStoryline];
    const setData = new Set(newSearch);
    const returnResut = [...setData];

    return returnResut;
  }

  render() {
    const movies = this.loadFilter();

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
};
MovieList.defaultProps = {
  movies: {
    title: 'string',
    imagePath: 'string',
    subtitle: 'string',
    storyline: 'string',
    rating: 10,
    searchText: 'string',
    bookmarkedOnly: false,
    selectedGenre: 'string',
  },
};

export default MovieList;