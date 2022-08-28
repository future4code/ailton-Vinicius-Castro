import { Request, Response } from 'express';
import connection from '../connection';

const table_tasks = "Tasks";
const table_responsibles = "Responsibles";

const deleteTaskById = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { taskId } = req.params;

        const taskById = await connection(table_tasks)
            .select("*")
            .where({ id: taskId });
            
        if (!taskById[0]) {
            errorCode = 409;
            throw new Error("Id doesn´t match a valid task.");
        };

        await connection(table_responsibles)
            .delete()
            .where({ taskId: taskId });

        await connection(table_tasks)
            .delete()
            .where({ id: taskId });

        res.status(200).send({
            message: "Tarefa removida com sucesso!"
        });
    } catch (err: any) {
        
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
};

export default deleteTaskById;