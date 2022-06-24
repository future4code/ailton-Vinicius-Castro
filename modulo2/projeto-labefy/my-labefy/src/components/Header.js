import React from "react";
import styled from "styled-components";

const HeadContainder = styled.div`
height: 120px;
display: flex;
align-items: center;
justify-content: space-around;
`


const BotoesContainer = styled.div`
width: 350px;
display: flex;
justify-content: space-between;


`

const Header = (props) => {
    return (
    
    <HeadContainder>
        <h1>Labefy</h1>
        <BotoesContainer>
            <button onClick={() => props.changePage("pagidaDeCriacaoDePlaylists")}> Cadastrar Playlist</button>
            <button onClick={() => props.changePage("pagidaDoGerenciadorDePlaylists")}> Gerenciador de Playlist</button>
        </BotoesContainer>
    </HeadContainder>
    )
} 

export default Header
 