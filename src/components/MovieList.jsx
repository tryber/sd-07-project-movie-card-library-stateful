import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      titleFind: '',
      favorit: false,
      genere: ''
    };
    this.handleChange = this.handleChange.bind();
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
      // this.setState({ [name]: value });
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={this.state.titleFind}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.favorits}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.genere}
          onSelectedGenreChange={this.handleChange}
        />
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
