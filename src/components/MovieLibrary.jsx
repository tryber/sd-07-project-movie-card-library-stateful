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
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedOnlyChange={(event) => this.setState({ bookmarkedOnly: event.target.value })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.props }.isRequired;

export default MovieLibrary;
