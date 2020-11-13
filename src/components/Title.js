import React, { Component } from "react";

class Title extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
export default Title;
