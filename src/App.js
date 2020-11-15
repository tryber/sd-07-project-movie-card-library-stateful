import React from 'react';
import './libs/bulma.min.css';
import './App.css';
import movies from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      onSearchTextChange: (event) => {
        this.setState({ searchText: event.target.value });
      },
      bookmarkedOnly: true,
      onBookmarkedChange: (event) => {
        this.setState({ bookmarkedOnly: event.target.value });
        // console.log(event.target)
      },
      selectedGenre: '',
      onSelectedGenreChange: (event) => {
        this.setState({ selectedGenre: event.target.value });
        // console.log(event.target.value)
      },
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      onChange: (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name);
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.state.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.state.onBookmarkedChange}
        />
        <MovieLibrary />
        <MovieList movies={movies} />
        <AddMovie
          subtitle={this.state.subtitle}
          title={this.state.title}
          imagePath={this.state.imagePath}
          storyline={this.state.storyline}
          rating={this.state.rating}
          genre={this.state.genre}
          onChange={this.state.onChange}
        />
      </div>
    );
  }
}

export default App;
