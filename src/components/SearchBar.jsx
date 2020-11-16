import React from "react";
// import propTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    console.log("clicou!");
  }
  render() {
    return (
      <div>
        <h1 className="search-bar">Searching</h1>
        <button onClick={this.handleClick}>Meu Botao</button>
      </div>
    );
  }
}

export default SearchBar;
