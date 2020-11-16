import React from 'react';

export class Select extends React.Component {
  SelectedGenreChange(movies, value) {
    return movies.filter((movie) => movie.genre.includes(value));
  }

  render() {
    // retirar prop e adicionar as PropTypes
    const prop = this.props;
    const { label, select, option, onSelectedGenreChange } = prop;
    return (
      <label {...label} htmlFor={select.id} >
        {label.content}
        <select
          {...select} 
          onChange={(e) => {
            onSelectedGenreChange(e.target.id, e.target.value, this.SelectedGenreChange);
          }}
        >
          {option.map(element => 
            <option {...element} data-testid="select-option" >{element.content}</option>
          )}
        </select>
      </label>
    )
  }
 }
 
export class Inputs extends React.Component {
  SearchTextChange(movies, value) {
    return movies.filter((movie) =>
      movie.title.includes(value) ||
        movie.subtitle.includes(value) ||
          movie.storyline.includes(value)
    )
  }
  BookmarkedChange(movies) {
    return movies.filter((movie) => movie.bookmarked)
  }
  render() {
    //retirar prop e adicionar as PropTypes
    const prop = this.props;
    const {label, input, onSearchTextChange, onBookmarkedChange } = prop;
    const { SearchTextChange, BookmarkedChange } = this;
    return (<label htmlFor={input.id} {...label} >
      {label.content}
      <input
        {...input}
        onChange={(e) => {
          const { id, value } = e.target;
          id === 'searchText' ?
            onSearchTextChange(id, value, SearchTextChange) :
              onBookmarkedChange(id, value, BookmarkedChange);
        }}
      />
    </label>)
  }
}

export default class SearchBar extends React.Component {
  render() {
    // retirar gambiarra quando feito protoType
    const prop = this.props;
    return (
      <form id="search-bar-form" data-testid="search-bar-form" >
        <Inputs
        {...prop}
        label={{ content: 'Inclui o texto:', 'data-testid': "text-input-label" }}
        input={{ value: prop.searchText, 'data-testid': "text-input", id: 'searchText' }}
        />
        <Inputs
        {...prop}
        label={{ content: 'Mostrar somente favoritos', 'data-testid': "checkbox-input-label" }}
        input={{ checked: prop.bookmarkedOnly, 'data-testid': "checkbox-input", id: 'bookmarkedOnly', type: "checkbox" }}
        />
        <Select
          {...prop}
          label={{ 'data-testid': "select-input-label", content: 'Filtrar por gênero' }}
          select={{ 'data-testid': "select-input", value: prop.selectedGenre, id: 'selectedGenre' }}
          option={[
            { value: "", content: 'Todos' },
            { value: "action", content: 'Ação' },
            { value: "comedy", content: 'Comédia' },
            { value: "thriller", content: 'Suspense' }
          ]}
        />
      </form>
    );
  }
}
