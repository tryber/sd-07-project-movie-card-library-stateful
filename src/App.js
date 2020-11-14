import React from 'react';
import './libs/bulma.min.css'
import './App.css';
// import data from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      onSearchTextChange: (event) => {
        this.setState({
            searchText: event.target.value
        })
      },
      bookmarkedOnly: true,
      onBookmarkedChange: (event) => {
        this.setState({
          bookmarkedOnly: event.target.value
        })
        console.log(event.target)
      },
      selectedGenre: '',
      onSelectedGenreChange: (event) => {
        this.setState({
          selectedGenre: event.target.value
        })
        console.log(event.target.value)
      },
    }
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
      </div>
    );
  }
}

export default App;
