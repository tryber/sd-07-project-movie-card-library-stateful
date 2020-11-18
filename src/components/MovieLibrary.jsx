import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.addNewMovieHandle = this.addNewMovieHandle.bind(this);
  }
  onSearchTextChange() { 'a'; }
  onBookmarkedChange() { 'b'; }
  onSelectedGenreChange() { 'c'; }

  addNewMovieHandle() {
    console.log('xablau');
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange('Strogonoff')}
          bookmarkedOnly={this.bookMarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange('Lasagna')}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange('Pizza')}
        />

        <div className="movie-list">
          <MovieList movies={this.props.movies} />
        </div>

        <AddMovie onClick={this.addNewMovieHandle} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieLibrary.defaultProps = {
  movies: [{
    title: 'Kingsglaive',
    subtitle: 'Final Fantasy XV',
    storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
    rating: 4.5,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
  }],
};

export default MovieLibrary;
