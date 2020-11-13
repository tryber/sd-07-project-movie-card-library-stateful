// implement MovieLibrary component here
import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText:"",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies
    }
  }

  filterMovies = (parameter) => {
    const { movies } = this.state;
    let filtered = this.props.movies;
    if (parameter) {
      filtered = movies.filter(movie => parameter === movie.bookmarked);
    } 
    this.setState(() => ({
      movies: filtered,
    }))
  }

  filterByText = (parameter) => {
    const movies = this.props.movies;
    let filtered = movies;
    const filterByTitle = movies.filter(movie => parameter === movie.title);
    const filterBySubTitle = movies.filter(movie => parameter === movie.subtitle);
    const filterByStory = movies.filter(movie => parameter === movie.storyline);

    if (filterByTitle.length > 0) filtered = filterByTitle;

    if (filterBySubTitle.length > 0) filtered = filterBySubTitle;

    if (filterByStory.length > 0) filtered = filterByStory;

    this.setState(() => ({
      movies: filtered,
    }))

  }

  onSearchTextChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      searchText: value
    }))
    this.filterByText(value);
  }

  onBookmarkedChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      this.setState(() => ({
        bookmarkedOnly: checked,
      }))
    } else {
      this.setState(() => ({
        bookmarkedOnly: checked,
      }))
    }
    this.filterMovies(checked);
  }

  handleAddMovie = (addMovieState) => {
    this.props.movies.append(addMovieState);
  }

  onSelectedGenreChange = (event) => {
    const { value } = event.target;
    const { movies } = this.props;
    let filterByGenre = movies
    if (value) {
      filterByGenre = movies.filter(movie => value === movie.genre)
    }
    this.setState(() => ({
      selectedGenre: value,
      movies: filterByGenre
    }))
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state
    return(
      <div>
        <SearchBar 
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange} 
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList 
          movies={movies}
        />
        <AddMovie onClick={this.handleAddMovie} />
        
      </div>
    )
  }
}

export default MovieLibrary;