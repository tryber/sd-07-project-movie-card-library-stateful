import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
  }

  // onSearchTextChange = (a) => a;

  // onBookmarkedChange = (b) => b;

  // onSelectedGenreChange = (c) => c;

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange("Strogonoff")}
          bookmarkedOnly={this.bookMarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange("Lasagna")}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange("Pizza")}
        />
      </div>
    )
  }
}

export default App;
