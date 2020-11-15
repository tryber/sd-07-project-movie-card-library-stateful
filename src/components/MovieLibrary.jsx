// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this); // 2 horas pra lembrar disso!


    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(oqchegou) {
    console.log('clicado');
    console.log(oqchegou);
    console.log(this.state.movies);
    // Aqui precisa colocar as informações no final do Objeto, tem aquele (...) que faz isso
    // const [...a, b] = this.state.movies //Não funciona, "rest must be last element"
    // console.log(a);
    // console.log(b);
    const newState = [...this.state.movies, oqchegou];// tá quase!
    console.log(newState); // tá quase!
    this.setState({ movies: newState });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value }, this.searchTextModification);
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, this.selectedGenreModification);
    // console.log(`antes ${this.state.movies}` )
    // console.log(this.state.movies[0].genre);
    // console.log(this.state.selectedGenre);
  }

  onBookmarkedChange(event) {
    // Aqui precisa fazer o esquema do tick, tem no video da aula R: era só colocar o target.checked
    this.setState({ bookmarkedOnly: event.target.checked }, this.bookmarkedModification);
  }

  searchTextModification() {
    // Sorry for that, codeclimate problems and a hurry
    const a = this.state.movies;
    this.setState({ movies: a.filter((element) => element.title.includes(this.state.searchText)) });
  }

  selectedGenreModification() {
    const b = this.state.movies;
    this.setState({ movies: b.filter((element) => element.genre === this.state.selectedGenre) });
  }

  bookmarkedModification() {
    const c = this.state.movies;
    const CCfault = this.state.bookmarkedOnly;
    this.setState({ movies: c.filter((element) => element.bookmarked === CCfault) });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
          onSearchTextChange={this.onSearchTextChange}
        />
        {/* {console.log(this.state.movies)}
        {console.log(this.state.movies[0].title)}
        {console.log(this.state.movies[0].genre)}
        {console.log(this.state.selectedGenre)} */}
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
