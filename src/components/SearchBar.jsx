import React from 'react';

class searchBar extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        searchText: '',
        onSearchTextChange: '',
        bookmarkedOnly: '',
        onBookmarkedChange: '',
        selectedGenre: '',
        onSelectedGenreChange: '',
    };
};


render(){
return (
    <div>
        <label>Text
            <input data-item="searchText" type="text"></input>
        </label>
    </div>
);
};
};
     
export default searchBar;
