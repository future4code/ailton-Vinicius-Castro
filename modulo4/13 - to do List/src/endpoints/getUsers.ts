import { Request, Response } from 'express';
import connection from '../connection';

const table_users = "Users";

const getUsers = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { search } = req.query;

        if (!search) {
            const allUsers = await connection(table_users)
                .select("*");

            return res.status(200).send({
                message: "Sucesso!",
                users: allUsers
            });
        };

        const selectedUsers = await connection(table_users)
            .select("*")
            .where("name", "LIKE", `%${search}%`)
            .orWhere("nickname", "LIKE", `%${search}%`)

        res.status(200).send({
            message: "Sucesso!",
            users: selectedUsers
        });
    } catch (err: any) {
        
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
};

export default getUsers;