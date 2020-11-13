import React from 'react';

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
    this.setState({ title: event.target.value });
    this.setState({ subtitle: event.target.value });
  }
  render() {
    return (
      <form >
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input
          id="title"
          data-testid="title-input"
          value={this.title}
          type="text"
          onChange={this.onClick}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Título
        </label>
        <input
          id="subtitle"
          data-testid="subtitle-input"
          value={this.subtitle}
          type="text"
          onChange={this.onClick}
        />
      </form>
    );
  }
}

export default AddMovie;
