import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

        return (
            <div>
                <form data-testid="search-bar-form">
                    <label data-testid="text-input-label" htmlFor="search-input">Inclui o texto</label>
                    <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} id="search-input" type="text" />
                </form>
            </div>
        );
    }
}

export default SearchBar;
