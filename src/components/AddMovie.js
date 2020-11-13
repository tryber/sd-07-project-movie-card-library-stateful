import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import Rating from './RatingFormulario.js';
import Genre from './Genre';

class AddMovie extends Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.onClick = this.onClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  onClick = event => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    })
  }
  
  render() {
    return (
    <form onSubmit={this.onClick} data-testid="add-movie-form">
      <Title value={this.state.title} handleChange={this.handleChange}/>
      <Subtitle value={this.state.subtitle} handleChange={this.handleChange}/>      
      <ImagePath value={this.state.imagePath} handleChange={this.handleChange}/>
      <StoryLine value={this.state.storyline} handleChange={this.handleChange}/>      
      <Rating value={this.state.rating} handleChange={this.handleChange}/>
      <Genre value={this.state.genre} handleChange={this.handleChange} />
      <button type='submit' data-testid="send-button" onClick={this.props.onClick}>Adicionar filme</button>
    </form>
    )
  }
}

export default AddMovie;