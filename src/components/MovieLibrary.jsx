import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.onChangeAddTitle = this.onChangeAddTitle.bind(this);
    this.onChangeAddSubtitle = this.onChangeAddSubtitle.bind(this);
    this.onChangeAddImage = this.onChangeAddImage.bind(this);
    this.onChangeAddStoryline = this.onChangeAddStoryline.bind(this);
    this.onChangeAddRating = this.onChangeAddRating.bind(this);
    this.onChangeAddGenre = this.onChangeAddGenre.bind(this);
    this.onChangeAddButton = this.onChangeAddButton.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onSearchTextChange(event) { this.setState({ searchText: event.target.value }); }

  onBookmarkedChange(event) { this.setState({ bookmarkedOnly: event.target.checked }); }

  onSelectedGenreChange(event) { this.setState({ selectedGenre: event.target.value }); }

  onChangeAddTitle(event) { this.setState({ title: event.target.value }); }

  onChangeAddSubtitle(event) { this.setState({ subtitle: event.target.value }); }

  onChangeAddImage(event) { this.setState({ imagePath: event.target.value }); }

  onChangeAddStoryline(event) { this.setState({ storyline: event.target.value }); }

  onChangeAddRating(event) { this.setState({ rating: event.target.value }); }

  onChangeAddGenre(event) { this.setState({ genre: event.target.value }); }

  onChangeAddButton(event) {
    event.preventDefault();
    const addmovie = {
      title: event.target.title,
      subtitle: event.target.subtitle,
      imagePath: event.target.imagePath,
      storyline: event.target.storyline,
      rating: event.target.rating,
      bookmarked: true,
      genre: event.target.genre,
    };
    this.setState({ movies: [...movies, addmovie] });
  }

  filterMovie(movie, text, bookmarkedOnly, genre) {
    let filteredMovie = Boolean;
    filteredMovie = movie.title.search(text) > -1
    || movie.subtitle.search(text) > -1
    || movie.storyline.search(text) > -1;
    if (bookmarkedOnly) filteredMovie = filteredMovie && movie.bookmarked === true;
    if (genre !== '') filteredMovie = filteredMovie && movie.genre === genre;
    return filteredMovie;
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList
          movies={this.state.movies.filter((e) =>
          this.filterMovie(e, this.state.searchText,
          this.state.bookmarkedOnly,
          this.state.selectedGenre))}
        />
        <AddMovie
          title={this.state.title}
          onChangeAddTitle={this.onChangeAddTitle}
          subtitle={this.state.subtitle}
          onChangeAddSubtitle={this.onChangeAddSubtitle}
          imagePath={this.state.imagePath}
          onChangeAddImage={this.onChangeAddImage}
          storyline={this.state.storyline}
          onChangeAddStoryline={this.onChangeAddStoryline}
          rating={this.state.rating}
          onChangeAddRating={this.onChangeAddRating}
          genre={this.state.genre}
          onChangeAddGenre={this.onChangeAddGenre}
          onChangeAddButton={this.onChangeAddButton}
        />
      </div>
    );
  }
}

export default MovieLibrary;
