import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="text-input"
            data-testid="text-input"
            type="text"
            name="searchText"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          <input
            id="checkbox-input"
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-input"
            data-testid="select-input"
            name="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
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

// "Na medida em que sua aplicação cresce, você pode capturar muitos bugs com checagem de tipos.
// Em algumas aplicações, você pode usar extensões do JavaScript como Flow ou TypeScript para
// checar os tipos de toda a sua aplicação. Porém, mesmo se você não usá-las, React possui
// algumas habilidades de checagem de tipos nativas. Para executar a checagem de tipos
// nas props para um componente, você pode atribuir à propriedade em especial propTypes"
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

// consultei o repositório de Arnaelcio para implementação das funções.
// https://github.com/tryber/sd-07-project-movie-card-library-stateful/pull/137
