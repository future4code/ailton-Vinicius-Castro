import express, {Request, Response}from "express";
import cors from "cors";
import {Produto, produtos} from "./data";

const app = express();

app.use(cors())

app.use(express.json())

// EX01
app.get("/test", (
    req:Request,
    res:Response

 ) => {
    res.status(200).send({
        message: "Server Working!"
    });
 });

// EX2 criar arquivo data.ts

// EX03 

app.get("/produtos", (
    req:Request,
    res:Response
) => {
    try {
        res.status(200).send(produtos);
   } catch (error:any) {
    res.status(500).send(error.message);
       };
});

// EX04

