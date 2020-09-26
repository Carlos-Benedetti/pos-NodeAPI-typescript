import Produto, { IProduto } from '../app/models/product';
import { RequestHandler } from 'express'
export module ProductController {
    export const post: RequestHandler = (req, res) => {
        const produto = new Produto();
        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save(function (error) {
            if (error)
                res.send(`Erro ao tentar salvar um novo produto ${error}`);

            res.status(201).json({ message: 'produto inserido com sucesso' });
        });
    }
    export const getById: RequestHandler = (req, res) => {
        const id = req.params.productId;
        Produto.findById(id, function (err, produto) {
            if (err) {
                res.status(500).json({
                    message: "Erro ao tentar encontrar produto; ID mal formato",
                });
            } else if (produto == null) {
                res.status(400).json({
                    message: "Produto não econtrado para o Id passado"
                });
            } else {
                res.status(200).json({
                    message: "Produto encontrado",
                    produto: produto
                });
            }
        });
    }
    export const getAll: RequestHandler = (req, res) => {
        Produto.find(function (err, prods) {
            if (err)
                res.send(err);

            res.status(200).json({
                message: "retorno ok de todos os produtos",
                allProducts: prods
            });
        });
    }
    export const put: RequestHandler = (req, res) => {
        const id = req.params.productId;
        console.log(id);
        Produto.findById(id, function (err, produto) {
            if (err) {
                res.status(500).json({
                    message: "Erro ao tentar econtrar produto, id mal formado"
                });
            } else if (produto == null) {
                res.status(400).json({
                    message: "Produto nao econtrado para o id passado"
                });
            } else {
                produto.nome = req.body.name;
                produto.preco = req.body.preco;
                produto.descricao = req.body.descricao;

                produto.save(function (error) {
                    if (error)
                        res.send(`Erro ao entar atualizar o produto", ${error}`);

                    res.status(200).json({
                        message: "produto atualizado com sucesso"
                    });
                });
            }
        });
    }
    export const deleteById: RequestHandler = (req, res) => {
        Produto.findByIdAndRemove(req.params.productId, (err, produto) => {
            if(!produto){
                return res.status(404).send()
            }
            if (err)
                return res.status(500).send(`Erro ao deletar ${err}`)

            const response = {
                message: "Produto removido com sucesso",
                id: produto.id
            };
            return res.status(200).send(response);
        });
    }
}