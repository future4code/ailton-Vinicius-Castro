import { Request, Response } from "express";
import connection from '../connection';

const table_users = "Users";
const table_tasks = "Tasks";
const table_responsibles = "Responsibles";

const addUserToTask = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { taskId } = req.params;
        const { userId } = req.body;

        const taskById = await connection(table_tasks)
            .select("*")
            .where({ id: taskId });

        if (!taskById[0]) {
            errorCode = 409;
            throw new Error("Id Não bate com a atividade valida.");
        };

        const userById = await connection(table_users)
            .select("*")
            .where({ id: userId });

        if (!userById[0]) {
            errorCode = 409;
            throw new Error("Id não bate com usuario valido.");
        };

        const responsibility = await connection(table_responsibles)
            .select("*")
            .where({ userId })
            .andWhere({ taskId })

        if (responsibility[0]) {
            errorCode = 409;
            throw new Error(" Usuario já esta inserido na atividade.");
        };

        await connection(table_responsibles)
            .insert({ userId, taskId });

        res.status(201).send({
            message: "Usuario Adicionado com sucesso a atividade.!"
        });
    } catch (err: any) {
        
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
};

export default addUserToTask;