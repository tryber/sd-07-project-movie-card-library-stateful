import React, { Component } from "react";
import PropTypes from "prop-types";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      // Olhei como deveria declarar o movies abaixo no código da Carol https://github.com/tryber/sd-07-project-movie-card-library-stateful/blob/8e067008c119be3ecc45971c9552f12bf6f3dcaa/src/components/MovieLibrary.jsx
      movies: props.movies,
    };
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

// validação de props abaixo consultado no primeiro projeto de movie library
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
