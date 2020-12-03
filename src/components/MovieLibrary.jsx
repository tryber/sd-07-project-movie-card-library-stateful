import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props){
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly:false,
      selectedGenre: '',
      movies: movies,
    };
  }
  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
          movies={this.movies}
        />  
        <MovieList/>
        <AddMovie />
    </div>
    
    )
}
}
MovieLibrary.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default MovieLibrary;