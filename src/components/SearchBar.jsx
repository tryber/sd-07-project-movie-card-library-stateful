import React, { Component } from 'react';
import PropTypes from 'prop-types';
class SearchBar extends Component {
    render() {
        return (
            <div>
                <form data-testid="search-bar-form">
                    <label htmlFor='searchText' data-testid="text-input-label">Inclui o texto:</label>
                    <input 
                        type='text' 
                        name='searchText' 
                        value='searchText' 
                        onChange={onSearchTextChange} 
                        data-testid="text-input"
                    ></input>
                    <label htmlFor='onlyFavorites' data-testid="checkbox-input-label" >Mostrar somente favoritos</label>
                    <input 
                        name='onlyFavorites'
                        type='checkbox' 
                        value='bookmarkedOnly' 
                        onChange={onBookmarkedChange}
                        data-testid="checkbox-input"
                    ></input>
                    <label htmlFor='filter' data-testid="select-input-label">Filtrar por gênero</label>
                    <select value='selectedGenre' onChange='onSelectedGenreChange' data-testid="select-input">
                        <option data-testid="select-option" value=''>Todos</option>
                        <option data-testid="select-option" value='action'>Ação</option>
                        <option data-testid="select-option" value='comedy'>Comédia</option>
                        <option data-testid="select-option" value='thriller'>Suspense</option>
                    </select>

                </form>
            </div>
        )
    }
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelectedGenreChange: PropTypes.func.isRequired,
  };

  export default SearchBar;