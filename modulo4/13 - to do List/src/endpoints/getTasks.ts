import { Request, Response } from 'express';
import connection from '../connection';

const table_tasks = "Tasks";

const getTasks = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { search } = req.query;

        if (!search) {
            const allTasks = await connection(table_tasks)
                .select("*");

            return res.status(200).send({
                message: "Sucesso!",
                tasks: allTasks
            });
        };

        const selectedTasks = await connection(table_tasks)
            .select("*")
            .where("title", "LIKE", `%${search}%`)
            .orWhere("description", "LIKE", `%${search}%`)

        res.status(200).send({
            message: "Sucesso!",
            tasks: selectedTasks
        });
    } catch (err: any) {
        
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
};

export default getTasks;