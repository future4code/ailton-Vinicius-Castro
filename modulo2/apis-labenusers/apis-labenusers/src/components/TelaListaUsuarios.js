
import React from 'react'

export default class TelaListaUsuarios extends React.Component {
 render() {
    return (
        <div>
            <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
            <h2>Lista de Usuarios</h2>
        </div>
    )
  }
}