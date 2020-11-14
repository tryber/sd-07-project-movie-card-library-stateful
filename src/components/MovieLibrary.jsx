// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.nemSeiMais = this.nemSeiMais.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',

      movies: props.movies,
      filteredMovies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.nemSeiMais);
  }

  nemSeiMais() {
    console.log('asdsad');
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    this.setState({
      filteredMovies: movies.filter(({ title, subtitle, storyline, bookmarked, genre }) => {
        const containText = (title + subtitle + storyline).includes(searchText);
        const filterGenre = genre.includes(selectedGenre);
        const filterBookMark = bookmarkedOnly ? bookmarked : true;
        console.log(containText, filterGenre, filterBookMark);
        return containText && filterGenre && filterBookMark;
      }),
    });
  }

  addMovie(newMovie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
