import express from "express";
export const indexRouter = express.Router();


//Padrão Middleware
indexRouter.use(function(req, res, next){
    console.log("Interceptação pelo Middleware ok"); //LOG, Validações, Autenticações
    next();
});

indexRouter.get('/', (req, res) => res.send("rota teste ok"));
