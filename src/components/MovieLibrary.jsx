import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { checked, type, value, name } = event.target;
    const checking = type === 'checkbox' ? checked : value;
    this.setState({ [name]: checking });
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  onClick(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.objectOf).isRequired };

export default MovieLibrary;
