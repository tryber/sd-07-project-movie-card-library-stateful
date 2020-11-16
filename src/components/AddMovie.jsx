import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Rating from './Rating-input';
import Genre from './Genre';

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
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="alinhar">
        <Title title={this.state.title} onClick={onClick} />
        <Subtitle subtitle={this.state.subtitle} onClick={onClick} />
        <ImagePath imagePath={this.state.imagePath} onClick={onClick} />
        <Storyline storyline={this.state.storyline} onClick={onClick} />
        <Rating rating={parseFloat(this.state.rating)} onClick={onClick} />
        <Genre genre={this.state.genre} onClick={onClick} />
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
