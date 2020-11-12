// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
     <div>
       <form>
         <label>
           <input type='text' value={this.props.searchText} onChange={this.props.onSearchTextChange}/>
         </label>
         <label>
           <input type='checklist' name='bookmarkedOnly' onChange={this.props.onBookmarkedChange} />
         </label>
         <select onChange={this.props.onSelectedGenreChange}>
           <option name='masculino'>Masculino</option>
           <option name='feminino'>Feminino</option>
         </select>
         <
        
       </form>

  {/* - `searchText`, uma string
  - `onSearchTextChange`, uma callback
  - `bookmarkedOnly`, um boolean
  - `onBookmarkedChange`, uma callback
  - `selectedGenre`, uma string
  - `onSelectedGenreChange`, uma callback */}
     </div>
    );
  }
}

export default SearchBar;
