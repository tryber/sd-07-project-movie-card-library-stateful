import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div> Olá mundo </div>
        );
    }
}

AddMovie.propTypes = { searchText: PropTypes.string.isRequired, 
onSearchTextChange : PropTypes.func.isRequired,
bookmarkedOnly : PropTypes.bool.isRequired,
onBookmarkedChange: PropTypes.func.isRequired,
selectedGenre : PropTypes.string.isRequired,
onSelectedGenreChange: PropTypes.func.isRequired
};

export default AddMovie;
