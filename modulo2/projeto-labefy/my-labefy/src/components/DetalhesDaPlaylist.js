import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackCard from "../TrackCard/TrackCard";
import { baseUrl, axiosConfig } from "../../constants";

const ContainerDeDetalhesDaPlaylist = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const FormularioDeCriacaoTrack = styled.form`
width: 100vw;
height: 100px;
display: flex;
align-items: center;
justify-content: space-around;

div {
    display: flex;
    flex-direction: column;
}
`
class DetalheDaPlaylist extends React.Component{
    state = {
        tracks:[],
        trackName: "",
        artist:"",
        url:"",
    };

    componentDidMount = () => {
        this.buscarFaixas()
    };

     buscarFaixasNaPlaylist = (event) => {
        event.preventDefault()
        const body = {
            name:this.state.trackName,
            artist:this.state.artist,
            url:this.state.url
        };

        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`,
        body,
        axiosConfig
        ).then(() => {
            this.buscarFaixas();
        }).catch(err =>{
            console.log(err);
        });

        this.setState({
            trackName:"",
            artist:"",
            url:""
        })
     };
     render(){
        const faixas = this.state.faixas.map(track =>{
            return
            <TrackCard></TrackCard>
        })

     }
}
