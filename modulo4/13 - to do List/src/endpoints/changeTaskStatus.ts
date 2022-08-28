import { Request, Response } from 'express';
import connection from '../connection';
import { STATUS_LIST } from '../types';

const table_tasks = "Tasks";

const changeTaskStatus = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { taskId } = req.params;
        const { status } = req.body;

        if (!status) {
            errorCode = 422;
            throw new Error("Dados ausentes para atualizar a tarefa.");
        };

        if (!(status in STATUS_LIST)) {
            errorCode = 422;
            throw new Error("Status invalido.");
        };

        const taskById = await connection(table_tasks)
            .select("*")
            .where({ id: taskId });

        if (!taskById[0]) {
            errorCode = 409;
            throw new Error("O ID não corresponde a uma tarefa válida.");
        };

        await connection(table_tasks)
            .update({ status })
            .where({ id: taskId });

        res.status(200).send({
            message: "Status da tarefa atualizado com sucesso!"
        });
    } catch (err: any) {
        
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
};

export default changeTaskStatus;