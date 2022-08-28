import { Request, Response } from "express";

const test = async(
    req: Request,
    res: Response
) => {
    try {
        res.status(200).send({ message: "O teste de endpoint foi bem-sucedido!"});
    } catch(err: any) {
        res.status(400).send(err.message);
    };
};

export default test;