import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.atualizarEstadoSearchBar = this.atualizarEstadoSearchBar.bind(this);
    this.filtrar = this.filtrar.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(novoFilme) {
    const joined = this.state.movies.concat(novoFilme);
    this.setState({ movies: joined });
  }

  filtrar(TodosFilmes) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return TodosFilmes.filter(
      (cadafilme) =>
        (bookmarkedOnly === true ? cadafilme.bookmarked === true : true) &&
        (selectedGenre === '' ? true : cadafilme.genre === selectedGenre) &&
        (searchText === ''
          ? true
          : cadafilme.title.includes(searchText) ||
            cadafilme.subtitle.includes(searchText) ||
            cadafilme.storyline.includes(searchText)),
    );
  }

  atualizarEstadoSearchBar({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    // a classe do serachbar que vai receber essa fucao pelo
    // parametro onChange
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.atualizarEstadoSearchBar}
          onBookmarkedChange={this.atualizarEstadoSearchBar}
          onSelectedGenreChange={this.atualizarEstadoSearchBar}
        />
        <MovieList movies={this.filtrar(this.state.movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default MovieLibrary;
