import React from 'react';

class AddMovieSelect extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="genre-input" data-testid="genre-input-label">Gênero </label>
        <select
          name="genre-input"
          // value={this.selectedGenre}
          // onChange={this.onSelectedGenreChange}
          data-testid="genre-input"
          id="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </fieldset>
    );
  }
}

export default AddMovieSelect;
