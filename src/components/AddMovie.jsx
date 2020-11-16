import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  render() {
    const { handelValue } = this.props;
    return (
      <form>
        <div>
          <label
            data-testid="title-input-label"
            htmlFor="title-input"
          >Título
          </label>
          <input
            name="title"
            id="title-input"
            type="text"
            data-testid="title-input"
            value={this.state.title}
            onChange={handelValue}
          />
        </div>
        <div>
          <label
            data-testid="subtitle-input-label"
            htmlFor="subtitle-input"
          >Subtítulo
         </label>
          <input
            name="subtitle"
            id="subtitle-input"
            type="text"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={handelValue}
          />
        </div>
        <div>
          <label
            data-testid="image-input-label"
            htmlFor="image-input"
          >Imagem
          </label>
          <input
            name="imagePath"
            id="image-input"
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={handelValue}
          />
        </div>
        <div>
          <label
            data-testid="storyline-input-label"
            htmlFor="storyline-input"
          >Sinopse
          </label>
          <input
            name="storyline"
            id="storyline-input"
            type="textarea"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={handelValue}
          />
        </div>
        <div>
          <label
            data-testid="rating-input-label"
            htmlFor="rating-input"
          >Avaliação
          </label>
          <input
            name="rating"
            id="rating-input"
            type="number"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={handelValue}
          />
        </div>
        <div>
          <label
            data-testid="select-input-label"
            htmlFor="select-input"
          >Gênero
          </label>
          <select
            id="select-input"
            data-testid="select-input"
            name="genre"
            value={this.state.genre}
            onChange={handelValue}
          >
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </div>
        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { handelValue: PropTypes.func.isRequired };
