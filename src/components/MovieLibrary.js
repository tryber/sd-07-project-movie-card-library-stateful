import React, { Component } from 'react';
import SearchBar from './SearchBar'
import AddMovie from './AddMovie'

class MovieLibrary extends Component {
    render() {
        return (
        <div>
            <SearchBar />
            <AddMovie />
        </div>
        );
    }
}

export default MovieLibrary;