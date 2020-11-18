import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSendButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button data-testid="send-button" onClick={onClick}>
        Adicionar filme
      </button>
    );
  }
}

AddMovieSendButton.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovieSendButton;
