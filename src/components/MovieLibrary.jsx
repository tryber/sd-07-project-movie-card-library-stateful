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
    // const filteredMovies = movies.filter((movie) => {
    //   const { title, subtitle, storyline, bookmarked, genre } = movie;
    //   let filtroTexto = false;
    //   let filtroGenero = false;
    //   let filtroFavorito = false;
    //   if (this.state.selectedGenre === '' || genre === this.state.selectedGenre) {
    //     filtroGenero = true;
    //   }
    //   if (
    //     this.state.searchText === '' || 
    //     title.includes(this.state.searchText) ||
    //     subtitle.includes(this.state.searchText) ||
    //     storyline.includes(this.state.searchText)
    //   ) {
    //     filtroTexto = true;
    //   }
    //   if (this.state.bookmarkedOnly === false || bookmarked === true) {
    //     filtroFavorito = true;
    //   }
    //   if (filtroTexto === true && filtroGenero === true && filtroFavorito === true) {
    //     return movie;
    //   }
    // });
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          onBookmarkedChange={this.handleChange}
          onSelectedGenreChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie
          onClick=""
        />
      </div>
    );
  }
}

export default MovieLibrary;
