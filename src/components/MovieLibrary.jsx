import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies },
    };
  }
  handleChange(event) {
    const name = event.target.name;
    const vallue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: vallue });
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          handleChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie rating={0} />
      </div>
    );
  }
}

export default MovieLibrary;
