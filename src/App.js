import React from 'react';
import './App.css';
import movies from './data';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }


  handleAddMovie() { 'd'; }
  render() {
    return (
      <div>
        <Header />
        <MovieLibrary movies={movies} />
      </div>
    );
  }
}

export default App;
