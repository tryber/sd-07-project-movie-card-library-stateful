import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.filtredCard = this.filtredCard.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  filtredCard(movies) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;

    if (selectedGenre !== '') {
      return movies.filter((card) => card.genre === selectedGenre);
    } else if (searchText !== '') {
      return movies.filter(
        (card) =>
          card.title.includes(searchText) ||
          card.subtitle.includes(searchText) ||
          card.storyline.includes(searchText),
      );
    } else if (bookmarkedOnly === true) {
      return movies.filter((card) => card.bookmarked === true);
    }
    return movies;
  }

  changeValue({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.changeValue}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.changeValue}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.changeValue}
        />
        <MovieList movies={this.filtredCard(movies)} />
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
