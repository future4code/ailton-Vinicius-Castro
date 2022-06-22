
import React from 'react'

export default class TelaCadastro extends React.Component {

    state = {
        nome: "",
        email:""
    }

  // handleNome = {e} => {
  //   this.setState({nome:e.target.value})
  // }

  // handleEmail = {e} => {
  //   this.setState({email:e.target.value})
  // }
  
  // fazerCadastro ()  => {
  //   console.log(this.state)

  // }


    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuarios</button>
                    <h2>Cadastro</h2>
                <input placeholder={'Nome'}
                     value={this.state.name}
                     onChange={this.handleNome}
                />

                <input 
                    placeholder={'E-Mail'}
                    value={this.state.email}
                    onChange={this.handle}
                />          

            <button onClick={this.fazerCadastro}>Cadastrar</button>
        
        </div>
    )
        }
      }
      
