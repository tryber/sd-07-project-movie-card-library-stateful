import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        > Título
          <input data-testid="title-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
