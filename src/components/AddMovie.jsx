import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.changeTextInput = this.changeTextInput.bind(this);

      this.state = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre:'action',
      }
  }

  changeTextInput(event) {
    this.setState({ title: event.target.value })
  }
 
  render() {
    const { onClick } = this.props;
    
    return (
      <form>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
        <input type="text" id="title-input" 
        data-testid="title-input" 
        value={this.state.title} 
        onChange={this.changeTextInput}></input>
        </label>
      </form>
    )
  }
}

export default AddMovie;
