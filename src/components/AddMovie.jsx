import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        <AddMovieTextInputTitle
          title={title}
          handleChange={this.handleChange}
        />
        <AddMovieTextInputSubtitle
          subtitle={subtitle}
          handleChange={this.handleChange}
        />
        <AddMovieTextInputImage
          imagePath={imagePath}
          handleChange={this.handleChange}
        />
        <AddMovieTextArea
          storyline={storyline}
          handleChange={this.handleChange}
        />
        <AddMovieInputRating
          rating={rating}
          handleChange={this.handleChange}
        />
        <AddMovieSelect
          genre={genre}
          handleChange={this.handleChange}
        />
        <AddMovieSendButton onClick={onClick} />
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
