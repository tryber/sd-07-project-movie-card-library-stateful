import React from 'react';
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
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <form className="alinhar">
        <Title title={this.state.title} onClick={this.onClick} />
        <Subtitle subtitle={this.state.subtitle} onClick={this.onClick} />
        <ImagePath imagePath={this.state.imagePath} onClick={this.onClick} />
        <Storyline storyline={this.state.storyline} onClick={this.onClick} />
        <Rating rating={this.state.rating} onClick={this.onClick} />
        <Genre genre={this.state.genre} onClick={this.onClick} />
        <button onClick={this.onClick} data-testid="send-button" type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
