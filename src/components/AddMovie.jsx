// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    console.log(this.setState);
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" action="" method="get">
          <div>
            <label data-testid="title-input-label" htmlFor="titleadd">
              Título:
              <input
                id="titleadd"
                type="text"
                data-testid="title-input"
                name="title"
                autoComplete="off"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="subtitle-input-label" htmlFor="subtitleadd">
              Subtítulo
              <input
                id="subtitleadd"
                type="text"
                data-testid="subtitle-input"
                name="subtitle"
                value={this.state.subtitle}
                autoComplete="off"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="image-input-label" htmlFor="imageadd">
              Imagem
              <input
                id="imageadd"
                type="text"
                data-testid="image-input"
                name="imagePath"
                value={this.state.imagePath}
                autoComplete="off"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="storyline-input-label" htmlFor="storylineadd">
              Sinopse
              <textarea
                id="storylineadd"
                data-testid="storyline-input"
                name="storyline"
                autoComplete="off"
                value={this.state.storyline}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="rating-input-label" htmlFor="ratingadd">
              Avaliação
              <input
                id="ratingadd"
                type="number"
                data-testid="rating-input"
                name="rating"
                value={this.state.rating}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="genre-input-label" htmlFor="genreadd">
              Gênero
              <select
                id="genreadd"
                data-testid="genre-input"
                name="genre"
                value={this.state.genre}
                onChange={this.handleChange}
              >
                <option data-testid="genre-option" value="action">
                  Ação
                </option>
                <option data-testid="genre-option" value="comedy">
                  Comédia
                </option>
                <option data-testid="genre-option" value="thriller">
                  Suspense
                </option>
              </select>
            </label>
          </div>

          <button data-testid="send-button" onClick={this.handleClick}>
            Adicionar filme{' '}
          </button>
        </form>
      </div>
    );
  }
}
export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
