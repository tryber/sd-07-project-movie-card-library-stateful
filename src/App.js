import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = ({
      subtitle: '',
      title:'',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: ''
    })
  }

  handleChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [id]: value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleChange} bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.handleChange} onSelectGenreChange={this.handleChange}/>
        <AddMovie />
      </div>
    );
  }
}

export default App;
