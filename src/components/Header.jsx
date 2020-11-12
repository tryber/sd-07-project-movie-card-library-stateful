import React from 'react';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary'

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
