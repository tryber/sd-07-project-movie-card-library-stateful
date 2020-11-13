import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.eventHandlerChange = this.eventHandlerChange.bind(this);

    this.state = {
      textInput: '',
      markedBook: false,
      genreSelected: '',
    };
  }

  eventHandlerChange({ target: { name, value, checked } }) {
    let theValue = value;
    if (name === 'markedBook') {
      theValue = checked;
    }
    this.setState({ [name]: theValue });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.textInput}
          onSearchTextChange={this.eventHandlerChange}
          bookmarkedOnly={this.state.markedBook}
          onBookmarkedChange={this.eventHandlerChange}
          selectedGenre={this.state.genreSelected}
          onSelectedGenreChange={this.eventHandlerChange}
        />
        {/*
        <MovieList movies={this.props.movies} />
        <AddMovie />
        */}
      </div>
    );
  }
}

export default MovieLibrary;
