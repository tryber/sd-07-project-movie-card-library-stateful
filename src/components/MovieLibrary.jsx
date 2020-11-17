import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onHandleInput = this.onHandleInput.bind(this);
    this.onHandleResult = this.onHandleResult.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.onHandleCheckBox = this.onHandleCheckBox.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onHandleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Função onHandleCheckBox feito com ajuda de Thaydds :D Obrigado.

  onHandleCheckBox() {
    this.setState((previousState) => ({ bookmarkedOnly: !previousState.bookmarkedOnly }));
  }

  onHandleResult() {
    let result = this.state.movies.filter(({ title, subtitle, storyline }) => title.toLowerCase()
      .includes(this.state.searchText.toLowerCase()) ||
      subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
      storyline.toLowerCase().includes(this.state.searchText.toLowerCase()))
      .filter(({ genre }) => genre.includes(this.state.selectedGenre));
      // Este restante da lógica feita com ajuda de Thaydds :D Obrigado.
    if (this.state.bookmarkedOnly) {
      result = result.filter(({ bookmarked }) => bookmarked);
    }
    return result;
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: state.movies.concat(movie) }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onHandleInput}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onHandleCheckBox}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onHandleInput}
        />
        <AddMovie onClick={this.addMovie} />
        <MovieList movies={this.onHandleResult()} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
