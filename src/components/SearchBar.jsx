// implement SearchBar component here
import React from "react";

class SearchBar extends React.Component {
  render() {
    const genres = this.props.genres;
    return (
      <div className="container-bar">
        <label>Serch movie:</label>
        <input type="text" />
        <div className="comp-serch">
          <label>
            Only favorite movies
            <input type="checkbox" id="checked" />
          </label>
        </div>
        <div>
          <label>Filter gender</label>
          <select>
            <option>All</option>
            {genres.map((actual) => <option key={actual.title}>{actual.genre}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchBar;
