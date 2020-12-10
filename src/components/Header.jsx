import React from 'react';
import AddMovie from './AddMovie';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="movie-card-header">
          <h1 className="page-title">Movie Cards Library</h1>
        </header>
      </div>
    );
  }
}

export default Header;
