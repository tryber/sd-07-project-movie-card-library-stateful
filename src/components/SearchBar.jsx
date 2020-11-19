import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
  

       render(){
        return (
          <form data-testid="search-bar-form">
            <div>
              <label data-testid="text-input-label">Inclui o texto:</label>
              <input value="serchText" data-testid="checkbox-input" onChange={onBookmarkedChange}/>
            </div>
            <div>
              <label data-testid="select-input-label">Filtrar por gênero</label>
              <select value="selectedGenre" onChange={onSelectedGenreChange} data-testid="select-input">
                <option value="" data-testid="select-option"> Todos</option>
                <option value="action"data-testid="select-option">Ação</option>
                <option value="comedy" data-testid="select-option">Comédia</option>
                <option value="thriller" data-testid="select-option">Suspense</option>
              </select>
            </div>
            </form>
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

export default SearchBar;// implement SearchBar component here
