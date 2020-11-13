import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }
  onSearchTextChange(event) {
    const { value } = event.target;
    return this.setState({ searchText: value });
  }
  onBookmarkedChange(event) {
    const { checked } = event.target;
    return this.setState({ bookmarkedOnly: checked });
  }
  onSelectedGenreChange(event) {
    const { value } = event.target;
    return this.setState({ selectedGenre: value });
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
      </div>
    );
  }
}

export default MovieLibrary;
