// implement MovieLibrary component here
import React from 'react'
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    }
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {movies} = this.props;
    <div>
      <SearchBar searchText={this.state.searchText} name="searchText" onSearchTextChange={this.handleChange}/>
    </div>
  }
}
export default MovieLibrary