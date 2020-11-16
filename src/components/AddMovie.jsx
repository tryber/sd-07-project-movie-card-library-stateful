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
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="alinhar" data-testid="add-movie-form" onSubmit={this.onClick}>
        <Title title={this.state.title} onClick={this.onClick} />
        <Subtitle subtitle={this.state.subtitle} onClick={this.onClick} />
        <ImagePath imagePath={this.state.imagePath} onClick={this.onClick} />
        <Storyline storyline={this.state.storyline} onClick={this.onClick} />
        <Rating rating={this.state.rating} onClick={this.onClick} />
        <Genre genre={this.state.genre} onClick={this.onClick} />
        <button
          onClick={onClick}
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
