// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
