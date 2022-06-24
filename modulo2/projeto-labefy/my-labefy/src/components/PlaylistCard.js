import React from "react";
import styled from "styled-components";

const PlaylistCardContainer =styled.div`
`

const BotaoApagar = styled.p`
`

const NomeContainer = styled.p`
`

const PlaylistCard = (props) => {
return (
    <PlaylistCardContainer>
        <button onClick={() => props.changePage("DetalhesDaPlaylist" , props.playlistId)}>Ir Para Playlist</button>
        <NomeContainer>{props.nome}</NomeContainer>
        <BotaoApagar onClick={() => props.apagarPlaylist(props.playlistId)}>Apagar</BotaoApagar>
    </PlaylistCardContainer>
)
}

export default PlaylistCard