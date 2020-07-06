import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';

class Livros extends Component {

  constructor(props) {

    super(props);

    this.state = {
      livros: [
       
      ],
      titulo: 'Livros'
    };

  }

  componentDidMount() {
    ApiService.ListaLivros().then(res => {
      this.setState({livros : [...this.state.livros, ...res.data]})
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Páginas de Livros</h1>
          <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']} />
          
        </div>
      </Fragment>
    );
  }
}
export default Livros;