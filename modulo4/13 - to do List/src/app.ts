import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

// app -> Variável que recebe as configs do ExpressJs.
const app = express();

// express.json() -> Configuração que habilita o formato de saída as requisições para JSON.
app.use(express.json());
// cors -> Utilizado para evitar problemas de roteamento e cruzamento de origens de dados
app.use(cors());

// Função que estabelece uma porta lógica de acess ao banco de dados.
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;