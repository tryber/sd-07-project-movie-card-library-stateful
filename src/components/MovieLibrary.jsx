import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            searchText: '',
            bookmarkedOnly: false,
            selectedGenre: '',
            movies: props.movies
        }
    }
  render() {

    return (
        <div>
            <SearchBar />
            <MovieList movies={this.state.movies} />
            <AddMovie />
        </div>
    );
  }
}

export default MovieLibrary;