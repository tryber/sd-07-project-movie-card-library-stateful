import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChanged = this.handleChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanged({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((beforeState) => ({
      ...beforeState,
      [name]: value,
    }));
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
                     Título
                <input
                  id="input-title"
                  data-testid="title-input"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChanged}
                />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
                     Subtítulo
                <input
                  id="input-subtitle"
                  data-testid="subtitle-input"
                  type="text"
                  name="subtitle"
                  value={this.state.subtitle}
                  onChange={this.handleChanged}
                />
        </label>
        <label htmlFor="input-image" data-testid="image-input-label">
                     Imagem
               <input
                 id="input-image"
                 data-testid="image-input"
                 type="text"
                 name="imagePath"
                 value={this.state.imagePath}
                 onChange={this.handleChanged}
               />
        </label>
        <label htmlFor="input-textarea" data-testid="storyline-input-label">
                     Sinopse
               <textarea
                 id="input-textarea"
                 data-testid="storyline-input"
                 type="text"
                 name="storyline"
                 value={this.state.storyline}
                 onChange={this.handleChanged}
               />
        </label>
        <label htmlFor="input-rating" data-testid="rating-input-label">
                     Avaliação
                <input
                  id="input-rating"
                  data-testid="rating-input"
                  type="number"
                  name="rating"
                  value={this.state.rating}
                  onChange={this.handleChanged}
                />
        </label>
        <label data-testid="genre-input-label" htmlFor="selected-gender">
                Gênero
               <select
                 onChange={this.handleChanged}
                 name="genre" value={this.state.genre}
                 id="selected-gender"
                 data-testid="genre-input"

               >
                 <option value="action" data-testid="genre-option">
                    Ação
                 </option>
                 <option value="comedy" data-testid="genre-option">
                 Comédia
                 </option>
                 <option value="thriller" data-testid="genre-option">
                 Suspense
                 </option>
               </select>
        </label>

        <button data-testid="send-button" onClick={this.handleClick}>
                Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
