// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.addMoreMovie = this.addMoreMovie.bind(this);
    this.state = {
      searchText: '',
      onSearchTextChange: (event) => {
        this.setState({ searchText: event.target.value });
      },
      bookmarkedOnly: false,
      onBookmarkedChange: (event) => {
        this.setState({ bookmarkedOnly: event.target.value });
      },
      selectedGenre: '',
      onSelectedGenreChange: (event) => {
        this.setState({ selectedGenre: event.target.value });
      },
      movies: props.movies,
    }
  }

  addMoreMovie(data) {
    const newMovie = {
      title: data.title,
      subtitle: data.subtitle,
      storyline: data.imagePath,
      rating: data.storyline,
      imagePath: data.rating,
      genre: data.genre,
    };

    const movies = this.state;
    console.log(newMovie);
    console.log(movies);
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.state.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.state.onBookmarkedChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.addMoreMovie}/>
      </div>
    );
  }
}

export default MovieLibrary;
