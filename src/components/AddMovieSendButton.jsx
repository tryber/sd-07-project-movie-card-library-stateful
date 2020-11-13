import React from 'react';

class AddMovieSendButton extends React.Component {
  render() {
    return(
      <button 
        data-testid="send-button"
        // onClick={}  
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddMovieSendButton;