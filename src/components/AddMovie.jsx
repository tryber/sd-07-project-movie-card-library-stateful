// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="field">
          <label
            className="label"
            htmlFor="title"
            data-testid="title-input-label"
          > Título
          </label>
          <div className="control">
            <input
              className="input"
              name="title"
              type="text"
              placeholder="Insira o título do filme"
              data-testid="title-input"
              value={this.props.title}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="field">
          <label
            className="label"
            htmlFor="subtitle"
            data-testid="subtitle-input-label"
          > Subtítulo
          </label>
          <div className="control">
            <input
              className="input"
              name="subtitle"
              type="text"
              placeholder="Insira o subtítulo do filme"
              data-testid="subtitle-input"
              value={this.props.subtitle}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="field">
          <label
            className="label"
            htmlFor="imagePath"
            data-testid="image-input-label"
          > Imagem
          </label>
          <div className="control">
            <input
              className="input"
              name="imagePath"
              type="text"
              placeholder="Insira o caminho para imagem do novo filme"
              data-testid="image-input"
              value={this.props.imagePath}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="field">
          <label
            className="label"
            htmlFor="storyline"
            data-testid="storyline-input-label"
          > Sinopse
          </label>
          <div className="control">
            <input
              className="input"
              name="storyline"
              type="textarea"
              placeholder="Insira o caminho para imagem do novo filme"
              data-testid="storyline-input"
              value={this.props.storyline}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="field">
          <label
            className="label"
            htmlFor="rating"
            data-testid="rating-input-label"
          > Avaliação
          </label>
          <div className="control">
            <input
              className="input"
              name="rating"
              type="number"
              data-testid="rating-input"
              value={this.props.rating}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label
              className="label"
              htmlFor="genre"
              data-testid="genre-input-label"
            > Gênero:
            </label>
            <div className="select is-primary">
              <select
                data-testid="genre-input"
                name="genre"
                value={this.props.genre}
                onChange={this.props.onChange}
              >
                <option value="action" data-testid="genre-option">Ação</option>
                <option value="comedy" data-testid="genre-option">Comédia</option>
                <option value="thriller" data-testid="genre-option">Suspense</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="buttons">
              <button
                className="button is-primary"
                data-testid="send-button"
                type="submit"
              > Adicionar filme
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onChange: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};

AddMovie.defaultProps = {
  onChange: () => {},
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: '',
};
