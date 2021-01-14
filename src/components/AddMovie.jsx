import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="Text" data-testid="title-input-label">
          Título
          <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          data-testid="title-input"
          />
        </label>
        <label htmlFor="Text" data-testid="subtitle-input-label">
          Subtítulo
          <input
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}
          data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
