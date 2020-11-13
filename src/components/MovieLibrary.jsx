import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.filtredCard = this.filtredCard.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(newCard) {
    const { title, subtitle, storyline, rating, imagePath, genre } = newCard;

    const addCard = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked: false,
      genre,
    };

    this.setState((previousState) => ({ movies: [...previousState.movies, addCard] }));
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
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
