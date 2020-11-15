// implement SearchBar component here
import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form action='' data-testid='search-bar-form'>
          <label htmlFor='searchText' data-testid='text-input-label'>
            Inclui o texto:
          </label>
          <input
            type='text'
            name=''
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            id='searchText'
            data-testid='text-input'
          />
          <label htmlFor='check' data-testid='checkbox-input-label'>
            Mostrar somente favoritos
          </label>
          <input
            type='checkbox'
            name=''
            id='check'
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
            data-testid='checkbox-input'
          />
          <label htmlFor='select' data-testid='select-input'>
            Filtrar por gênero
          </label>
          <select
            name=''
            id='select'
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
            data-testid='select-input'>
            <option value='' data-testid='selected-option'>
              Todos
            </option>
            <option value='action' data-testid='selected-option'>
              Ação
            </option>
            <option value='comedy' data-testid='selected-option'>
              Comédia
            </option>
            <option value='thriller' data-testid='selected-option'>
              Suspense
            </option>
          </select>
        </form>
      </div>
    );
  }
}
