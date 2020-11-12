import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props
        return (
            <form data-testid="search-bar-form">
                <div>
                    <label data-testid="text-input-label">Inclui o texto</label>
                    <input data-testid="text-input" type="text" name="searchText" value={searchText} onChange={onSearchTextChange} />
                </div>
                <div>
                    <label data-testid="checkbox-input-label"> Mostrar somente favoritos</label>
                    <input data-testid="checkbox-input" type="checkbox" name="bookmarkedOnly" checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
                </div>
                <div>
                    <label data-testid="select-input-label">Filtrar por gênero</label>
                    <select data-testid="select-input" name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
                        <option data-testid="select-option" value="">Todos</option>
                        <option data-testid="select-option" value="action">Ação</option>
                        <option data-testid="select-option" value="comedy">Comédia</option>
                        <option data-testid="select-option" value="thriller">Suspense</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default SearchBar;