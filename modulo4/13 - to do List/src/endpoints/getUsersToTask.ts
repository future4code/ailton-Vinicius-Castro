import { Request, Response } from 'express';
import connection from '../connection';

const table_users = "Users";
const table_tasks = "Tasks";
const table_responsibles = "Responsibles";

const getUsersToTask = async (
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
            throw new Error("O ID não corresponde a uma tarefa válida.");
        };

        const usersByTask = await connection(table_responsibles)
            .where({ taskId });

        const allUsersToTask = [];

        for (let user of usersByTask) {
            const result = await connection(table_users)
                .select("id", "nickname")
                .where({ id: user.userId });

            allUsersToTask.push(result);
        };

        res.status(200).send({
            message: "Success!",
            users: allUsersToTask
        });
    } catch (err: any) {

            if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
};

export default getUsersToTask;