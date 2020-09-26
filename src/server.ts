// importando pacotes
import express from "express";
import bodyParser from "body-parser";
const app = express();
import mongoose from 'mongoose';

//configurar o app para usar o body-parser e tranformar as requisicoes em json
app.use(bodyParser.json());
//@ts-ignore
app.use(bodyParser.urlencoded({extends: true}));

//Persistencias
                           
const connection_string = "mongodb+srv://Cadu:1234@cluster0.wxwdo.gcp.mongodb.net/dbpos?retryWrites=true&w=majority";
mongoose.connect(connection_string,  {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});

//Definir porta onde o server vai responder 
const port = process.env.PORT || 3000;

//definir as rotar
const router = express.Router(); //intercepta todas as rotas 
import {productRouter} from './src/routes/product-route';
import {indexRouter} from './src/routes/index-router';


//vincular a aplicacao (app) com o motor de rotas do express
// /api é o caminho padrao para as apis rest
//rota principal
app.use('/api', indexRouter);


//rota para produto
app.use('/api/produtos/', productRouter);


app.listen(port, () => {
    console.log("server is up and running... ", port);
});
