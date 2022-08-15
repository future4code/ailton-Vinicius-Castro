import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Button from "@material-ui/core/Button";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    background-color: grey;
}
`;
export const TelaLogin = styled.div`
  height: 926px;
  width: 428px;
  left: -406px;
  top: -464px;
  border-radius: 0px;
  background: #ffffff;
  border: 1px solid black;
`;
export const TelaCadastro = styled.div`
  height: 926px;
  width: 428px;
  left: 76px;
  top: -464px;
  border-radius: 0px;
  background: #ffffff;
  border: 1px solid black;
`;
export const TelaFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1080px;
  width: 428px;
  left: 540px;
  top: -464px;
  border-radius: 0px;
  background: #ffffff;
  border: 1px solid black;
`;
export const TelaPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1080px;
  width: 428px;
  left: 1004px;
  top: -464px;
  border-radius: 0px;
  background: #ffffff;
  border: 1px solid black;
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #ff6488 0%, #f9b25e 100%);
  width: 26em;
  border-radius: 15em !important;
`;
export const SignUpButton = styled(Button)`
  border: 1px solid #fe7e09;
  border-radius: 15em !important;
`;

export const LinhaDiv = styled.div`
  margin: 1.5em;
  border: 1px solid #f9b25e;
  border-image-source: linear-gradient(90deg, #ff6488 0%, #f9b25e 100%);
`;
