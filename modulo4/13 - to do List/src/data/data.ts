import { STATUS_LIST, Task, User } from "../types";

export const users: User[] = [
    {
        id: "01",
        name: "Vinicius",
        nickname: "Vinnie",
        email: "vinnie@gmail.com"
    },
    {
        id: "02",
        name: "Lucas",
        nickname: "Luki",
        email: "lucas@gmail.com"
    },
    {
        id: "03",
        name: "Ricardo",
        nickname: "Dinho",
        email: "dinho@gmail.com"
    },
    {
        id: "04",
        name: "Maria Clara",
        nickname: "Mclara",
        email: "maria_clara@gmail.com"
    },
    {
        id: "05",
        name: "Mariana",
        nickname: "Nana",
        email: "Mariana@gmail.com"
    }
];

export const tasks: Task[] = [
    {
        id: "1",
        title: "Organizar a festa",
        description: "Definir os convidaos",
        dueDate: "2022-09-01",
        status: STATUS_LIST.TO_DO,
        creatorUserId: "1"
    },
    {
        id: "2",
        title: "Encomendar Comidas",
        description: "Entrar em contato com a empresa buffet e compania",
        dueDate: "2022-09-01",
        status: STATUS_LIST.DOING,
        creatorUserId: "3"
    },
    {
        id: "3",
        title: "Contratar banda",
        description: "Contratar ",
        dueDate: "2022-09-01",
        status: STATUS_LIST.DONE,
        creatorUserId: "4"
    },
    {
        id: "4",
        title: "Pagamento dos musicos",
        description: "Efetuar o pagamento dos musicos e banda.",
        dueDate: "2022-08-30",
        status: STATUS_LIST.TO_DO,
        creatorUserId: "5"
    },
    {
        id: "5",
        title: "Veridicar convidados",
        description: "verificar se esta tudo certo com os convidados",
        dueDate: "2022-09-01",
        status: STATUS_LIST.DOING,
        creatorUserId: "1"
    },
    
];

// Lista de responsáveis (usuários) por tarefas.
export const responsibles = [
    {
        userId: "2",
        taskId: "5"
    },
    {
        userId: "1",
        taskId: "4"
    },
    {
        userId: "2",
        taskId: "5"
    },
    {
        userId: "3",
        taskId: "2"
    }
];