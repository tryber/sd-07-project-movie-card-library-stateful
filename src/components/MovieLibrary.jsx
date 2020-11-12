import React from 'react';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
    render() {
        return (
            <div>
                <MovieList movies={this.props.movies}/>
            </div>
        )
    }
}

export default MovieLibrary;
