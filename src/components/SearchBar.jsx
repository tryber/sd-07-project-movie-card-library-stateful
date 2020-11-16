import React from 'react';
import PropTypes from 'prop-types';

export class Select extends React.Component {
  SelectedGenreChange(movies, value) {
    return movies.filter((movie) => movie.genre.includes(value));
  }
  render() {
    const { label, select, option, onSelectedGenreChange } = this.props;
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
 Select.propTypes = {
  label: PropTypes.object,
  select: PropTypes.object,
  onSelectedGenreChange: PropTypes.func,
  option: PropTypes.array
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
    const {label, input, onSearchTextChange, onBookmarkedChange } = this.props;
    return (<label htmlFor={input.id} {...label} >
      {label.content}
      <input
        {...input}
        onChange={(e) => {
          const { id, value } = e.target;
          id === 'searchText' ?
            onSearchTextChange(id, value, this.SearchTextChange) :
              onBookmarkedChange(id, value, this.BookmarkedChange);
        }}
      />
    </label>)
  }
}
Inputs.propTypes = {
  label: PropTypes.object,
  input: PropTypes.object,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func
}

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <form id="search-bar-form" data-testid="search-bar-form" >
        <Inputs
        {...this.props}
        //Dá para pegar value por outro lugar
        label={{ content: 'Inclui o texto:', 'data-testid': "text-input-label" }}
        input={{ value: searchText, 'data-testid': "text-input", id: 'searchText' }}
        />
        <Inputs
        {...this.props}
        //Dá para pegar checked por outro lugar
        label={{ content: 'Mostrar somente favoritos', 'data-testid': "checkbox-input-label" }}
        input={{ checked: bookmarkedOnly, 'data-testid': "checkbox-input", id: 'bookmarkedOnly', type: "checkbox" }}
        />
        <Select
          {...this.props}
          //Dá para pegar value por outro lugar
          label={{ 'data-testid': "select-input-label", content: 'Filtrar por gênero' }}
          select={{ 'data-testid': "select-input", value: selectedGenre, id: 'selectedGenre' }}
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
SearchBar.propTypes = {
  searchText: PropTypes.func,
  bookmarkedOnly: PropTypes.func,
  selectedGenre: PropTypes.func,
  state: PropTypes.object,
}
export default SearchBar;
