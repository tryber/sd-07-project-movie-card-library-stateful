import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    const p = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: p.movies,
    };
  }
  onSearchTextChange(event) {
    const p = this.props;
    this.setState({ searchText: event.target.value });
    this.state.movies = p.movies.filter((movie) => movie.title.includes(event.target.value));
  }

  onBookmarkedChange(event) {
    const p = this.props;
    this.setState({ bookmarkedOnly: event.target.checked });
    this.state.movies = p.movies.filter(movie => (movie.bookmarked === true));
  }

  onSelectedGenreChange(event) {
    const p = this.props;
    this.setState({ selectedGenre: event.target.value });
    this.state.movies = p.movies.filter(movie => movie.genre.includes(event.target.value));
  }

  onClick(obj) {
    const p = this.props;
    if (obj.title !== '' && obj.subtitle !== '' && obj.storyline !== '' && obj.imagePath !== '') {
      p.movies.push(obj);
    }
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
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
