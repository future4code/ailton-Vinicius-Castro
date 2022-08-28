import { Request, Response } from 'express';
import connection from '../connection';

const table_users = "Users";

const changeUserNickname = async (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400;

    try {
        const { userId } = req.params;
        const { nickname } = req.body;

        if (!nickname) {
            errorCode = 422;
            throw new Error("Esta faltando algum dado para atualizar o usuario");
        };

        if (typeof nickname !== "string") {
            errorCode = 422;
            throw new Error("nickname invalido");
        };

        if (nickname.length < 4) {
            errorCode = 422;
            throw new Error("Um novo Nickname tem que ter pelo menos 3 caracteres.");
        };

        const userById = await connection(table_users)
            .select("*")
            .where({ id: userId });

        if (!userById[0]) {
            errorCode = 409;
            throw new Error("Id não  com um usuario valido.");
        };

        await connection(table_users)
            .update({ nickname })
            .where({ id: userId });

        res.status(200).send({
            message: "Usuario atualizado com sucesso!"
        });
    } catch (err: any) {
        
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
};

export default changeUserNickname;