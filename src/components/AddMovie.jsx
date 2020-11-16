import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Title from './Title.js';
import Subtitle from './Subtitle.js';
import ImagePath from './ImagePath.js';
import Storyline from './Storyline.js';
import Rating from './Rating-input.js';
import Genre from './Genre.js';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.onRecupera = this.onRecupera.bind(this);
    this.Reset = this.Reset.bind(this);
    this.handleClick = this.Reset.bind(this);
  }

  onRecupera(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  Reset() {
    this.setState({ title: '' });
    this.setState({ subtitle: '' });
    this.setState({ imagePath: '' });
    this.setState({ storyline: '' });
    this.setState({ rating: 0 });
    this.setState({ genre: '' });
  }

  handleClick(event) {
    this.Reset();
    this.onRecupera(event);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form
        className="alinhar"
        data-testid="add-movie-form"
        onSubmit={this.onRecupera}
      >
        <Title title={this.state.title} onClick={this.onRecupera} />
        <Subtitle subtitle={this.state.subtitle} onClick={this.onRecupera} />
        <ImagePath imagePath={this.state.imagePath} onClick={this.onRecupera} />
        <Storyline storyline={this.state.storyline} onClick={this.onRecupera} />
        <Rating rating={this.state.rating} onClick={this.onRecupera} />
        <Genre genre={this.state.genre} onClick={this.onRecupera} />
        <button
          onClick={() => {
            this.handleClick();
            onClick();
          }}
          data-testid="send-button"
          type="submit"
          value="Adicionar filme"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
