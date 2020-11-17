import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange() { 'a'; }
  onBookmarkedChange() { 'b'; }
  onSelectedGenreChange() { 'c'; }

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange('Strogonoff')}
          bookmarkedOnly={this.bookMarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange('Lasagna')}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange('Pizza')}
        />
        <AddMovie onClick={() => 'a'} />
      </div>
    );
  }
}

export default App;
