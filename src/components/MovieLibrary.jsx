import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
    constructor() {
        super()
        this.state = {
            searchText: '', 
            bookmarkedOnly: false, 
            selectedGenre: '',         
        }
    }
    onSearchTextChange = ({target}) => {
       const {value} = target;
        this.setState({
            searchText:value})
    };
    onBookmarkedChange = ({target}) => {
        const {checked} = target;
        this.setState({
            bookmarkedOnly:checked})
    };
    onSelectedGenreChange = ({target}) => {
        const {value} = target;
        this.setState({
            selectedGenre:value})
    };
    render() {
        return (
            <div>
                <SearchBar
                searchText={this.state.searchText}
                onSearchTextChange ={this.onSearchTextChange}
                bookmarkedOnly={this.state.bookmarkedOnly}
                onBookmarkedChange = {this.onBookmarkedChange}
                selectedGenre = {this.state.selectedGenre}
                onSelectedGenreChange = {this.onSelectedGenreChange}
                />
            </div>
        )
    }
}

export default MovieLibrary;