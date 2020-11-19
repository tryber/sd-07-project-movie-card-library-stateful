// implement MovieLibrary component here
import React from 'react';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }
  
  render() {
    const { movies } = this.props;
    return (
      <span>Testing stuff, don't worry</span>
    )
  }
}

export default MovieLibrary;