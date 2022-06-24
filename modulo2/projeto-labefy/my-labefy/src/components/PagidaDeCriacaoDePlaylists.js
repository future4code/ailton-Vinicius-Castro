import React from "react";
import { baseUrl, axiosConfig } from "../constants";
import styled from "styled-components";
import axios from "axios";

const ContainerDeCriacaoDePlaylist = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: centar;
`;

const FormularioDeCriacaoDePlaylist = styled.form`
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

class PagidaDeCriacaoDePlaylists extends React.Component {
  state = {
    inputNameValue: "",
  };

  changeInputNameValue = (event) => {
    this.setState({ inputNameValue: event.target.value });
  };

  createPlaylist = (event) => {
    event.preventDefault();
    const body = {
      nome: this.state.inputNameValue,
    };

    axios
      .post(body, baseUrl, axiosConfig)
      .then(() => {
        alert("Cadastro Efetuado");
      })
      .catch((err) => [console.log(err)]);
    this.setState({ inputNameValue: "" });
  };

  render() {
    return (
      <ContainerDeCriacaoDePlaylist>
        <h1>Cadastro de nova Playlist</h1>
        <FormularioDeCriacaoDePlaylist onSubmit={this.createPlaylist}>
          <label>Nova Playlist</label>
          <input
            placeholder="Playlist"
            type="text"
            value={this.state.inputNameValue}
            onChange={this.changeInputNameValue}
          />
        </FormularioDeCriacaoDePlaylist>
      </ContainerDeCriacaoDePlaylist>
    );
  }
}

export default PagidaDeCriacaoDePlaylists;
