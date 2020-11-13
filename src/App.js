import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import Lista from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      barra: '',
      favorito: false,
      genero: '',
    };
  }
  onSearchTextChange(event) {
    this.setState({ barra: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ favorito: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ genero: event.target.value });
  }

  onClick(obj) {
    if (obj.title !== '' && obj.subtitle !== '' && obj.storyline !== '' && obj.imagePath !== '') {
      Lista.push(obj);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.barra}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.favorito}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.genero}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
