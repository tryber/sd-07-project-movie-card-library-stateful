// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div className="container-form">
        <input type="text" placeholder="Titulo" className="input-form" />
        <input type="text" placeholder="Subtitulo" className="input-form" />
        <input type="text" placeholder="Imagem" className="input-form" />
        <textarea
          placeholder="Sinopse"
          cols="30"
          rows="3"
          className="text-area"
        />
        <input type="number" placeholder="Avaliação" className="input-form" />
        <label htmlFor="form-addMovie">
          Gênero:
          <select id="form-addMovie">
            <option value=""/>
            <option value="action">Ação</option>
            <option value="adventure">Aventura</option>
            <option value="fantasy">Fantasia</option>
            <option value="tragedy">Drama</option>
            <option value="comedie">Comedia</option>
            <option value="sifi">Ficção</option>
          </select>
        </label>
        <button className="btn-sucess" type="submit">Adcionar</button>
      </div>
    );
  }
}

export default AddMovie;
