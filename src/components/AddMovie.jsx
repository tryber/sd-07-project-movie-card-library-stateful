// implement AddMovie component here
import React from "react";

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }
  render() {
    return (
      <div>
        <form action=''>
          <label htmlFor='addTitle' data-testid='title-input-label'>
            Título
          </label>
          <input type='text' name='' id='addTitle' data-testid='title-input' />
          <label htmlFor='addTitle' data-testid='subtitle-input-label'>
            Título
          </label>
          <input
            type='text'
            name=''
            id='addTitle'
            data-testid='subtitle-input'
          />
          <label htmlFor='addTitle' data-testid='image-input-label'>
            Título
          </label>
          <input type='text' name='' id='addTitle' data-testid='image-input' />
          <label htmlFor='addTitle' data-testid='storyline-input-label'>
            Título
          </label>
          <input
            type='text'
            name=''
            id='addTitle'
            data-testid='storyline-input'
          />
          <label htmlFor='addTitle' data-testid='rating-input-label'>
            Título
          </label>
          <input type='text' name='' id='addTitle' data-testid='rating-input' />
          <label htmlFor='addTitle' data-testid='genre-input-label'>
            Título
          </label>
          <input type='text' name='' id='addTitle' data-testid='genre-input' />
        </form>
      </div>
    );
  }
}
