import React from 'react';
import PropTypes from 'prop-types'

import AddMovieTextInputTitle from './AddMovieTextInputTitle';
import AddMovieTextInputSubtitle from './AddMovieTextInputSubtitle';
import AddMovieTextInputImage from './AddMovieTextInputImage';
import AddMovieTextArea from './AddMovieTextArea';
import AddMovieInputRating from './AddMovieInputRating';
import AddMovieSelect from './AddMovieSelect';
import AddMovieSendButton from './AddMovieSendButton';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    return (
      <form action="" data-testid="add-movie-form">
        <AddMovieTextInputTitle />
        <AddMovieTextInputSubtitle />
        <AddMovieTextInputImage />
        <AddMovieTextArea />
        <AddMovieInputRating />
        <AddMovieSelect />
        <AddMovieSendButton />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;