import React from 'react';
import '../App.css';
import SearchText from './SearchText';
import BookMarkedOnly from './BookMarkedOnly';
import SelectedGenre from './SelectedGenre';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { checked, type, value, name } = event.target;
    const checking =
      type === 'checkbox'
        ? checked
        : value;
    this.setState({ [name]: checking });
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <form className="alinhar" data-testid="search-bar-form" >
        <SearchText
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
        />
        <BookMarkedOnly
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
        />
        <SelectedGenre
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
      </form>
    );
  }
}

export default SearchBar;
