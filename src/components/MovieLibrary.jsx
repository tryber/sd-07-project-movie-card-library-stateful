import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onChange={(event) => this.setState({ bookmarkedOnly: event.target.value })}
          selectedGenre={selectedGenre}
          onChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
