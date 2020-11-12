import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.eventChange = this.eventChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  eventChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { title } = this.state;

    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={title}
            onChange={this.eventChange}
            name="title"
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
