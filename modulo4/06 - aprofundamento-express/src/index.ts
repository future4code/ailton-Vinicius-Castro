import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors())

// Exercício 1    
//     Faça novamente a instalação e configuração do Express na pasta do exercício.
//     Para testar, crie um endpoint
//     que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (
    req: Request,
    res: Response
) => {
    res.status(200).send({
        message: "Pong!"
    });
});

// - Exercício 2
    
//     Acesse a API do JSONPlaceholder e observe os endpoints que buscam [afazeres]
//     (https://jsonplaceholder.typicode.com/todos) (”*todos”*)

type ToDo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
};

// Crie uma variável de tipo para representar cada afazer.
let toDoList: ToDo[] = [
    { 
        userId: 1,
        id: 1,
        title: "Assistir Aula",
        completed: true
    }
    { 
        userId: 1,
        id: 2,
        title: "Ler o Notion",
        completed: false
    }
    { 
        userId: 1,
        id: 3,
        title: "Fazer Atividades",
        completed: false
    }
    { 
        userId: 1,
        id: 4,
        title: "Entregar atividades pelo Git",
        completed: true
    }
]

// - Exercício 3
    
// Crie um array de afazeres para servir como base de dados da nossa 
// API e utilize a tipagem desenvolvida no exercício anterior.

