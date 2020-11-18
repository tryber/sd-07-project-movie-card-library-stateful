import React from 'react';

import AddMovieTextInputTitle from './AddMovieTextInputTitle';
import AddMovieTextInputSubtitle from './AddMovieTextInputSubtitle';
import AddMovieTextInputImage from './AddMovieTextInputImage';
import AddMovieTextArea from './AddMovieTextArea';
import AddMovieInputRating from './AddMovieInputRating';
import AddMovieSelect from './AddMovieSelect';
import AddMovieSendButton from './AddMovieSendButton';

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
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'rating') {
      return this.setState({ [name]: parseFloat(value) });
    }

    return this.setState({ [name]: value });
  }
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick, handleChange } = this;
    return (
      <form action="" data-testid="add-movie-form">
        <AddMovieTextInputTitle title={title} handleChange={handleChange} />
        <AddMovieTextInputSubtitle
          subtitle={subtitle}
          handleChange={handleChange}
        />
        <AddMovieTextInputImage
          imagePath={imagePath}
          handleChange={handleChange}
        />
        <AddMovieTextArea storyline={storyline} handleChange={handleChange} />
        <AddMovieInputRating rating={rating} handleChange={handleChange} />
        <AddMovieSelect genre={genre} handleChange={handleChange} />
        <AddMovieSendButton onClick={onClick} />
      </form>
    );
  }
}

export default AddMovie;
