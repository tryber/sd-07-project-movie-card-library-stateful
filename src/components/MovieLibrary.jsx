import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  changeValue({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });

    let cards = [...this.props.movies];
    if (this.state.selectedGenre === '') {
      this.setState({ movies: cards });
    } else {
      cards = cards.filter((card) => card.genre === this.state.selectedGenre);
      this.setState({ movies: cards });
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeValue}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeValue}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeValue}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;
