import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.inputText = this.inputText.bind(this);
    this.inputCheckbox = this.inputCheckbox.bind(this);
    this.inputSelect = this.inputSelect.bind(this);
  }

  inputText() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="textInput">
        Inclui o texto
        <input
          type="text"
          name="textInput"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />
      </label>);
  }

  inputCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="markedBook">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="markedBook"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
      </label>);
  }

  inputSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    console.log(selectedGenre);
    return (
      <label data-testid="select-input-label" htmlFor="genreSelected">
        Filtrar por gênero
        <select
          name="genreSelected"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option" >Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }


  render() {
    return (
      <form data-testid="search-bar-form">
        {this.inputText()}
        {this.inputCheckbox()}
        {this.inputSelect()}
      </form>
    );
  }

}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};
