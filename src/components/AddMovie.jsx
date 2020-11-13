import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: "0",
      // genre: "action",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    // const { onClick } = this.props;
    return (
      <div>
        <form>
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input data-testid="title-input" type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
