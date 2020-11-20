// implement MovieLibrary component here
import React, { Component } from 'react'
import Data from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie'

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      MovieData: Data,
      filteredMovieData: Data
    }
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => this.filterMovieList());
  }

  onBookmarkedChange = event => { // event.target.name é null dentro do prevState, pk?
    const eventTargetName = event.target.name
    this.setState(prevState => ({
     [eventTargetName]: !prevState.bookmarkedOnly
    }), () => console.log(this.state.bookmarkedOnly));
  }

  onSelectedGenreChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state.selectedGenre));
  }
  filterMovieList() {
    this.setState(prevState => {
      console.log(prevState.MovieData)
      this.setState({
        filteredMovieData: prevState.MovieData.filter(({ title }) => title.includes(this.state.searchText))
      })
    }, () => console.log(this.state.filteredMovieData));
  }
  
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.filteredMovieData} />
        <AddMovie />
      </div>
    )
  }
}
