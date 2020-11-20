import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  handleChange({target}) {
    console.log(target.value)
    const {name, value} = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
          </label>
          <input
            type="text"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
          ></input>
        </div>
      </form>
    );
  }
}

export default AddMovie;
