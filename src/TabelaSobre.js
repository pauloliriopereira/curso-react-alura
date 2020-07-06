import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Sobre</th>
            </tr>
        </thead>
    );
}


const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key = { index }>
                <td>{linha.sobre}</td>
            </tr>
        );
    });
    return (
        <tbody>
           {linhas}
        </tbody>
    );
}

class TabelaSobre extends Component {

    render() {
        const { autores } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody autores = { autores } />
            </table>
        );
    }

}

export default TabelaSobre;