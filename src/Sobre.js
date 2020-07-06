import React, { Component, Fragment } from 'react';
import Header from './Header';
import TabelaSobre from './TabelaSobre';

class Sobre extends Component {

  constructor(props) {

    super(props);

    this.state = {
      autores: [
        {
          nome: 'Paulo',
          livro: 'React',
          preco: '99',
          sobre: 'Curso de React Avançado'
        },
        {
          nome: 'Daniel',
          livro: 'Java',
          preco: '150',
          sobre: 'Iniciando no Java'
        },
        {
          nome: 'Marcos',
          livro: 'Design',
          preco: '100',
          sobre: 'Design Resposivo'
        },
        {
          nome: 'Bruno',
          livro: 'DevOps',
          preco: '999',
          sobre: 'Criando uma aplicação com Microserviços'
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Sobre</h1>
          <TabelaSobre autores={this.state.autores} />
        </div>
      </Fragment>
    );
  }
}
export default Sobre;