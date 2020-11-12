import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange({ target }) {
    console.log(target.name);
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  onBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.checked;
    this.setState({
      [name]: value,
    });
  }
  onSelectedGenreChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
      </div>
    );
  }
}

export default App;
